import { AbstractActivity, Activity, Input } from "@rxdrag/minions-runtime"
import { IActivityDefine } from "@rxdrag/minions-schema"
import { QuerySession } from "httpquery/lib/classes/QuerySession"
import { IQueryConfig, IQueryParam, IRestfulQuerySession } from "httpquery/lib/interfaces"

@Activity(PostData.NAME)
export class PostData extends AbstractActivity<IQueryConfig> {
  public static NAME = "example.PostData"
  public static OUTPUT_NAME_DATA = "dataOut"
  public static OUTPUT_NAME_POSTING = "posting"
  public static OUTPUT_NAME_ERROR = "error"
  public querySession?: IRestfulQuerySession;

  constructor(meta: IActivityDefine<IQueryConfig>) {
    super(meta)
    if (meta.config) {
      const dataQuery = new QuerySession(meta.config)
      if (!dataQuery) {
        console.error("Create data source error!")
        this.next(undefined);
        return
      }

      this.querySession = dataQuery;
    }
  }

  @Input()
  inputHandler(params: IQueryParam): void {
    //@@ 最好能添加防抖处理，把一段小段时间间隔内的请求，合并为一个请求，使用最后的参数查询
    this?.querySession?.query(params, {
      onData: this.complateHandler,
      onError: this.errorHandler,
      onLoading: this.loadinghandler,
    })
  }

  complateHandler = (data: unknown) => {
    this.next(data, PostData.OUTPUT_NAME_DATA)
  }

  errorHandler = (error?: Error) => {
    this.next(error, PostData.OUTPUT_NAME_ERROR)
  }

  loadinghandler = (loading?: boolean) => {
    this.next(loading, PostData.OUTPUT_NAME_POSTING)
  }

  destory = () => {
    this.querySession?.destory()
  }
}