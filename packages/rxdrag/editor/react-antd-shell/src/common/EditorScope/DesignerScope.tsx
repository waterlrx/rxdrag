import { memo } from "react"
import { Designer } from "@rxdrag/react-core"
import { BackgroundImageInput, BackgroundPositionInput, BackgroundRepeatInput, BackgroundSizeInput, CheckboxGroup, ColInput, CollapsePanel, ColorInput, DisplaySetter, EffectsInput, EventInput, ExpressionInput, Fold, FoldBase, FoldExtra, FoldExtraItem, FontColorInput, FontDecorationSelect, FontLineHeightInput, FontSelect, FontSizeInput, FontStyleSelect, FontWeightInput, GutterInput, IconInput, ImageInput, JSONInput, MarginStyleSetter, PaddingStyleSetter, PropLayout, SizeInput, SlotSwitch, StyleSetter, TabPanel, Tabs, TextAlignSelect, ValueInput, YupRulesInput } from "@rxdrag/react-antd-props-inputs";
import { Checkbox, Input, InputNumber, Radio, Select, Slider, Space } from 'antd';
import { FormItem, Switch } from "@rxdrag/react-antd-components";
import { EditorScropProps } from "./EditorScropProps";

export const DesignerScope = memo((
  props: EditorScropProps
) => {
  const { themeMode, minionOptions, materials, setters, locales, children } = props;

  return (
    <Designer
      minionOptions={minionOptions}
      materials={materials}
      themeMode={themeMode}
      locales = {locales}
      setters={
        {
          Tabs,
          TabPanel,
          FormItem: FormItem,
          Input,
          TextArea: Input.TextArea,
          Select,
          Switch,
          SlotSwitch,
          Fold,
          FoldBase,
          FoldExtra,
          FoldExtraItem,
          Radio,
          Slider,
          InputNumber,
          ColorInput,
          SizeInput,
          FontSelect,
          FontColorInput,
          FontDecorationSelect,
          FontSizeInput,
          FontLineHeightInput,
          FontStyleSelect,
          FontWeightInput,
          TextAlignSelect,
          MarginStyleSetter,
          PaddingStyleSetter,
          DisplaySetter,
          IconInput,
          GutterInput,
          "Radio.Group": Radio.Group,
          "Checkbox.Group": Checkbox.Group,
          Checkbox: Checkbox,
          CheckboxGroup: CheckboxGroup,
          ColInput,
          BackgroundImageInput,
          BackgroundSizeInput,
          BackgroundRepeatInput,
          BackgroundPositionInput,
          ImageInput,
          CollapsePanel,
          EffectsInput,
          EventInput,
          ValueInput,
          JSONInput,
          ExpressionInput,
          Space,
          StyleSetter,
          PropLayout,
          YupRulesInput,
          ...setters,
        }
      }
    >
      {children}
    </Designer>
  )
})