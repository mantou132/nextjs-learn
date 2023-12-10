import { useRef, useState } from 'react';
import Layout from '../components/layout';
import type { DyColorPickerMethods } from 'duoyun-ui/react/DyColorPicker';

import DyActionText, { DuoyunActionTextElement } from 'duoyun-ui/react/DyActionText'
import DyActiveLink, { DuoyunActiveLinkElement } from 'duoyun-ui/react/DyActiveLink'
import DyAlert, { DuoyunAlertElement } from 'duoyun-ui/react/DyAlert'
import DyAreaChart, { DuoyunAreaChartElement } from 'duoyun-ui/react/DyAreaChart'
import DyAvatar, { DuoyunAvatarElement } from 'duoyun-ui/react/DyAvatar'
import DyAvatarGroup, { DuoyunAvatarGroupElement } from 'duoyun-ui/react/DyAvatarGroup'
import DyBanner, { DuoyunBannerElement } from 'duoyun-ui/react/DyBanner'
import DyBarChart, { DuoyunBarChartElement } from 'duoyun-ui/react/DyBarChart'
import DyBreadcrumbs, { DuoyunBreadcrumbsElement } from 'duoyun-ui/react/DyBreadcrumbs'
import DyButton, { DuoyunButtonElement } from 'duoyun-ui/react/DyButton'
import DyCalendar, { DuoyunCalendarElement } from 'duoyun-ui/react/DyCalendar'
import DyCard, { DuoyunCardElement } from 'duoyun-ui/react/DyCard'
import DyCarousel, { DuoyunCarouselElement } from 'duoyun-ui/react/DyCarousel'
import DyCascader, { DuoyunCascaderElement } from 'duoyun-ui/react/DyCascader'
import DyCascaderPicker, { DuoyunCascaderPickerElement } from 'duoyun-ui/react/DyCascaderPicker'
import DyChartTooltip, { DuoyunChartTooltipElement } from 'duoyun-ui/react/DyChartTooltip'
import DyChartZoom, { DuoyunChartZoomElement } from 'duoyun-ui/react/DyChartZoom'
import DyCheckbox, { DuoyunCheckboxElement } from 'duoyun-ui/react/DyCheckbox'
import DyCheckboxGroup, { DuoyunCheckboxGroupElement } from 'duoyun-ui/react/DyCheckboxGroup'
import DyCoachMark, { DuoyunCoachMarkElement } from 'duoyun-ui/react/DyCoachMark'
import DyCodeBlock, { DuoyunCodeBlockElement } from 'duoyun-ui/react/DyCodeBlock'
import DyCollapse, { DuoyunCollapseElement } from 'duoyun-ui/react/DyCollapse'
import DyCollapsePanel, { DuoyunCollapsePanelElement } from 'duoyun-ui/react/DyCollapsePanel'
import DyContextmenu, { DuoyunContextmenuElement } from 'duoyun-ui/react/DyContextmenu'
import DyColorPanel, { DuoyunColorPanelElement } from 'duoyun-ui/react/DyColorPanel'
import DyColorPicker, { DuoyunColorPickerElement } from 'duoyun-ui/react/DyColorPicker'
import DyCompartment, { DuoyunCompartmentElement } from 'duoyun-ui/react/DyCompartment'
import DyCopy, { DuoyunCopyElement } from 'duoyun-ui/react/DyCopy'
import DyDatePanel, { DuoyunDatePanelElement } from 'duoyun-ui/react/DyDatePanel'
import DyDatePicker, { DuoyunDatePickerElement } from 'duoyun-ui/react/DyDatePicker'
import DyDateRangePanel, { DuoyunDateRangePanelElement } from 'duoyun-ui/react/DyDateRangePanel'
import DyDateRangePicker, { DuoyunDateRangePickerElement } from 'duoyun-ui/react/DyDateRangePicker'
import DyDivider, { DuoyunDividerElement } from 'duoyun-ui/react/DyDivider'
import DyDonutChart, { DuoyunDonutChartElement } from 'duoyun-ui/react/DyDonutChart'
import DyDrawer, { DuoyunDrawerElement } from 'duoyun-ui/react/DyDrawer'
import DyDropArea, { DuoyunDropAreaElement } from 'duoyun-ui/react/DyDropArea'
import DyEmpty, { DuoyunEmptyElement } from 'duoyun-ui/react/DyEmpty'
import DyFilePicker, { DuoyunFilePickerElement } from 'duoyun-ui/react/DyFilePicker'
import DyFlow, { DuoyunFlowElement } from 'duoyun-ui/react/DyFlow'
import DyFlowCanvas, { DuoyunFlowCanvasElement } from 'duoyun-ui/react/DyFlowCanvas'
import DyForm, { DuoyunFormElement } from 'duoyun-ui/react/DyForm'
import DyFormItem, { DuoyunFormItemElement } from 'duoyun-ui/react/DyFormItem'
import DyFormItemInlineGroup, { DuoyunFormItemInlineGroupElement } from 'duoyun-ui/react/DyFormItemInlineGroup'
import DyGesture, { DuoyunGestureElement } from 'duoyun-ui/react/DyGesture'
import DyHeading, { DuoyunHeadingElement } from 'duoyun-ui/react/DyHeading'
import DyHelpText, { DuoyunHelpTextElement } from 'duoyun-ui/react/DyHelpText'
import DyIcons, { DuoyunIconsElement } from 'duoyun-ui/react/DyIcons'
import DyImagePreview, { DuoyunImagePreviewElement } from 'duoyun-ui/react/DyImagePreview'
import DyInput, { DuoyunInputElement } from 'duoyun-ui/react/DyInput'
import DyInputCapture, { DuoyunInputCaptureElement } from 'duoyun-ui/react/DyInputCapture'
import DyInputGroup, { DuoyunInputGroupElement } from 'duoyun-ui/react/DyInputGroup'
import DyKeyboardAccess, { DuoyunKeyboardAccessElement } from 'duoyun-ui/react/DyKeyboardAccess'
import DyLegend, { DuoyunLegendElement } from 'duoyun-ui/react/DyLegend'
import DyLightRoute, { DuoyunLightRouteElement } from 'duoyun-ui/react/DyLightRoute'
import DyLineChart, { DuoyunLineChartElement } from 'duoyun-ui/react/DyLineChart'
import DyLink, { DuoyunLinkElement } from 'duoyun-ui/react/DyLink'
import DyList, { DuoyunListElement } from 'duoyun-ui/react/DyList'
import DyListItem, { DuoyunListItemElement } from 'duoyun-ui/react/DyListItem'
import DyLoading, { DuoyunLoadingElement } from 'duoyun-ui/react/DyLoading'
import DyMap, { DuoyunMapElement } from 'duoyun-ui/react/DyMap'
import DyMeter, { DuoyunMeterElement } from 'duoyun-ui/react/DyMeter'
import DyModal, { DuoyunModalElement } from 'duoyun-ui/react/DyModal'
import DyMore, { DuoyunMoreElement } from 'duoyun-ui/react/DyMore'
import DyMoreSlot, { DuoyunMoreSlotElement } from 'duoyun-ui/react/DyMoreSlot'
import DyOptions, { DuoyunOptionsElement } from 'duoyun-ui/react/DyOptions'
import DyPageLoadbar, { DuoyunPageLoadbarElement } from 'duoyun-ui/react/DyPageLoadbar'
import DyPagination, { DuoyunPaginationElement } from 'duoyun-ui/react/DyPagination'
import DyParagraph, { DuoyunParagraphElement } from 'duoyun-ui/react/DyParagraph'
import DyPicker, { DuoyunPickerElement } from 'duoyun-ui/react/DyPicker'
import DyPlaceholder, { DuoyunPlaceholderElement } from 'duoyun-ui/react/DyPlaceholder'
import DyPopover, { DuoyunPopoverElement } from 'duoyun-ui/react/DyPopover'
import DyPopoverGhost, { DuoyunPopoverGhostElement } from 'duoyun-ui/react/DyPopoverGhost'
import DyProgress, { DuoyunProgressElement } from 'duoyun-ui/react/DyProgress'
import DyRadio, { DuoyunRadioElement } from 'duoyun-ui/react/DyRadio'
import DyRadioGroup, { DuoyunRadioGroupElement } from 'duoyun-ui/react/DyRadioGroup'
import DyRate, { DuoyunRateElement } from 'duoyun-ui/react/DyRate'
import DyReflect, { DuoyunReflectElement } from 'duoyun-ui/react/DyReflect'
import DyResult, { DuoyunResultElement } from 'duoyun-ui/react/DyResult'
import DyRoute, { DuoyunRouteElement } from 'duoyun-ui/react/DyRoute'
import DyScatterChart, { DuoyunScatterChartElement } from 'duoyun-ui/react/DyScatterChart'
import DySelect, { DuoyunSelectElement } from 'duoyun-ui/react/DySelect'
import DySelectionBox, { DuoyunSelectionBoxElement } from 'duoyun-ui/react/DySelectionBox'
import DySelectionBoxMask, { DuoyunSelectionBoxMaskElement } from 'duoyun-ui/react/DySelectionBoxMask'
import DyShortcutRecord, { DuoyunShortcutRecordElement } from 'duoyun-ui/react/DyShortcutRecord'
import DySideNavigation, { DuoyunSideNavigationElement } from 'duoyun-ui/react/DySideNavigation'
import DySlider, { DuoyunSliderElement } from 'duoyun-ui/react/DySlider'
import DySpace, { DuoyunSpaceElement } from 'duoyun-ui/react/DySpace'
import DyStatistic, { DuoyunStatisticElement } from 'duoyun-ui/react/DyStatistic'
import DyStatusLight, { DuoyunStatusLightElement } from 'duoyun-ui/react/DyStatusLight'
import DySwitch, { DuoyunSwitchElement } from 'duoyun-ui/react/DySwitch'
import DyTable, { DuoyunTableElement } from 'duoyun-ui/react/DyTable'
import DyTabPanel, { DuoyunTabPanelElement } from 'duoyun-ui/react/DyTabPanel'
import DyTabs, { DuoyunTabsElement } from 'duoyun-ui/react/DyTabs'
import DyTag, { DuoyunTagElement } from 'duoyun-ui/react/DyTag'
import DyTextMask, { DuoyunTextMaskElement } from 'duoyun-ui/react/DyTextMask'
import DyTimeline, { DuoyunTimelineElement } from 'duoyun-ui/react/DyTimeline'
import DyTimePanel, { DuoyunTimePanelElement } from 'duoyun-ui/react/DyTimePanel'
import DyTimePicker, { DuoyunTimePickerElement } from 'duoyun-ui/react/DyTimePicker'
import DyTitle, { DuoyunTitleElement } from 'duoyun-ui/react/DyTitle'
import DyToast, { DuoyunToastElement } from 'duoyun-ui/react/DyToast'
import DyTooltip, { DuoyunTooltipElement } from 'duoyun-ui/react/DyTooltip'
import DyTree, { DuoyunTreeElement } from 'duoyun-ui/react/DyTree'
import DyUnsafe, { DuoyunUnsafeElement } from 'duoyun-ui/react/DyUnsafe'
import DyUse, { DuoyunUseElement } from 'duoyun-ui/react/DyUse'
import DyWait, { DuoyunWaitElement } from 'duoyun-ui/react/DyWait'

if (typeof window !== 'undefined') {
  [DuoyunActionTextElement,
    DuoyunActiveLinkElement,
    DuoyunAlertElement,
    DuoyunAreaChartElement,
    DuoyunAvatarElement,
    DuoyunAvatarGroupElement,
    DuoyunBannerElement,
    DuoyunBarChartElement,
    DuoyunBreadcrumbsElement,
    DuoyunButtonElement,
    DuoyunCalendarElement,
    DuoyunCardElement,
    DuoyunCarouselElement,
    DuoyunCascaderElement,
    DuoyunCascaderPickerElement,
    DuoyunChartTooltipElement,
    DuoyunChartZoomElement,
    DuoyunCheckboxElement,
    DuoyunCheckboxGroupElement,
    DuoyunCoachMarkElement,
    DuoyunCodeBlockElement,
    DuoyunCollapseElement,
    DuoyunCollapsePanelElement,
    DuoyunContextmenuElement,
    DuoyunColorPanelElement,
    DuoyunColorPickerElement,
    DuoyunCompartmentElement,
    DuoyunCopyElement,
    DuoyunDatePanelElement,
    DuoyunDatePickerElement,
    DuoyunDateRangePanelElement,
    DuoyunDateRangePickerElement,
    DuoyunDividerElement,
    DuoyunDonutChartElement,
    DuoyunDrawerElement,
    DuoyunDropAreaElement,
    DuoyunEmptyElement,
    DuoyunFilePickerElement,
    DuoyunFlowElement,
    DuoyunFlowCanvasElement,
    DuoyunFormElement,
    DuoyunFormItemElement,
    DuoyunFormItemInlineGroupElement,
    DuoyunGestureElement,
    DuoyunHeadingElement,
    DuoyunHelpTextElement,
    DuoyunIconsElement,
    DuoyunImagePreviewElement,
    DuoyunInputElement,
    DuoyunInputCaptureElement,
    DuoyunInputGroupElement,
    DuoyunKeyboardAccessElement,
    DuoyunLegendElement,
    DuoyunLightRouteElement,
    DuoyunLineChartElement,
    DuoyunLinkElement,
    DuoyunListElement,
    DuoyunListItemElement,
    DuoyunLoadingElement,
    DuoyunMapElement,
    DuoyunMeterElement,
    DuoyunModalElement,
    DuoyunMoreElement,
    DuoyunMoreSlotElement,
    DuoyunOptionsElement,
    DuoyunPageLoadbarElement,
    DuoyunPaginationElement,
    DuoyunParagraphElement,
    DuoyunPickerElement,
    DuoyunPlaceholderElement,
    DuoyunPopoverElement,
    DuoyunPopoverGhostElement,
    DuoyunProgressElement,
    DuoyunRadioElement,
    DuoyunRadioGroupElement,
    DuoyunRateElement,
    DuoyunReflectElement,
    DuoyunResultElement,
    DuoyunRouteElement,
    DuoyunScatterChartElement,
    DuoyunSelectElement,
    DuoyunSelectionBoxElement,
    DuoyunSelectionBoxMaskElement,
    DuoyunShortcutRecordElement,
    DuoyunSideNavigationElement,
    DuoyunSliderElement,
    DuoyunSpaceElement,
    DuoyunStatisticElement,
    DuoyunStatusLightElement,
    DuoyunSwitchElement,
    DuoyunTableElement,
    DuoyunTabPanelElement,
    DuoyunTabsElement,
    DuoyunTagElement,
    DuoyunTextMaskElement,
    DuoyunTimelineElement,
    DuoyunTimePanelElement,
    DuoyunTimePickerElement,
    DuoyunTitleElement,
    DuoyunToastElement,
    DuoyunTooltipElement,
    DuoyunTreeElement,
    DuoyunUnsafeElement,
    DuoyunUseElement,
    DuoyunWaitElement,].map((C) => {
      const ele = new C()
      console.log(`create ${ele.tagName}`, document.createElement(ele.tagName))
    })
}

export default function Text() {
  const colorRef = useRef<DyColorPickerMethods>(null)
  const [color, changeColor] = useState<`#${string}`>('#aaa')

  return <Layout layout='test'>
    <DyParagraph>
      <DySpace size='large'>
        <DyButton onClick={() => colorRef.current?.showPicker()}>Open Color Picker</DyButton>
        <DyColorPicker ref={colorRef} value={color} onchange={(e: CustomEvent) => changeColor(e.detail)}></DyColorPicker>
      </DySpace>
    </DyParagraph>

    <DyCard
      style={{ width: '300px' }}
      avatar="https://api.dicebear.com/5.x/bottts-neutral/svg"
      preview="https://picsum.photos/400/300"
      header={`This is Card`}
      detail={`CE`}
      actions={[{ text: "Action1", handle: console.log }, { text: "Action2", handle: console.log }, { text: "Action3", handle: console.log }, { text: "Action4", handle: console.log }, { text: "Action5", handle: console.log }]}
    >
      Fugiat do laboris ad officia in anim qui mollit nulla reprehenderit pariatur anim sunt.
    </DyCard>

    {/* <DyActionText>DyActionText</DyActionText> */}
    {/* <DyActiveLink>DyActiveLink</DyActiveLink> */}
    {/* <DyAlert /> */}
    {/* <DyAreaChart /> */}
    {/* <DyAvatar /> */}
    {/* <DyAvatarGroup /> */}
    {/* <DyBanner /> */}
    {/* <DyBarChart /> */}
    {/* <DyBreadcrumbs /> */}
    {/* <DyButton>DyButton</DyButton> */}
    {/* <DyCalendar /> */}
    {/* <DyCard /> */}
    {/* <DyCarousel /> */}
    {/* <DyCascader /> */}
    {/* <DyCascaderPicker /> */}
    {/* <DyChartTooltip /> */}
    {/* <DyChartZoom /> */}
    {/* <DyCheckbox /> */}
    {/* <DyCheckboxGroup /> */}
    {/* <DyCoachMark /> */}
    {/* <DyCodeBlock /> */}
    {/* <DyContextmenu /> */}
    {/* <DyCollapse /> */}
    {/* <DyCollapsePanel /> */}
    {/* <DyColorPanel /> */}
    {/* <DyColorPicker /> */}
    {/* <DyCompartment /> */}
    {/* <DyCopy /> */}
    {/* <DyDatePanel /> */}
    {/* <DyDatePicker /> */}
    {/* <DyDateRangePanel /> */}
    {/* <DyDateRangePicker /> */}
    {/* <DyDivider /> */}
    {/* <DyDonutChart /> */}
    {/* <DyDrawer /> */}
    {/* <DyDropArea /> */}
    {/* <DyEmpty /> */}
    {/* <DyFilePicker /> */}
    {/* <DyFlow /> */}
    {/* <DyFlowCanvas /> */}
    {/* <DyForm /> */}
    {/* <DyFormItem /> */}
    {/* <DyFormItemInlineGroup /> */}
    {/* <DyGesture /> */}
    {/* <DyHeading /> */}
    {/* <DyHelpText /> */}
    {/* <DyIcons /> */}
    {/* <DyImagePreview /> */}
    {/* <DyInput /> */}
    {/* <DyInputCapture /> */}
    {/* <DyInputGroup /> */}
    {/* <DyKeyboardAccess /> */}
    {/* <DyLegend /> */}
    {/* <DyLightRoute /> */}
    {/* <DyLineChart /> */}
    {/* <DyLink /> */}
    {/* <DyList /> */}
    {/* <DyListItem /> */}
    {/* <DyLoading /> */}
    {/* <DyMap /> */}
    {/* <DyMeter /> */}
    {/* <DyModal /> */}
    {/* <DyMore /> */}
    {/* <DyMoreSlot /> */}
    {/* <DyOptions /> */}
    {/* <DyPageLoadbar /> */}
    {/* <DyPagination /> */}
    {/* <DyParagraph /> */}
    {/* <DyPicker /> */}
    {/* <DyPlaceholder /> */}
    {/* <DyPopover /> */}
    {/* <DyPopoverGhost /> */}
    {/* <DyProgress /> */}
    {/* <DyRadio /> */}
    {/* <DyRadioGroup /> */}
    {/* <DyRate /> */}
    {/* <DyReflect /> */}
    {/* <DyResult /> */}
    {/* <DyRoute /> */}
    {/* <DyScatterChart /> */}
    {/* <DySelect /> */}
    {/* <DySelectionBox /> */}
    {/* <DySelectionBoxMask /> */}
    {/* <DyShortcutRecord /> */}
    {/* <DySideNavigation /> */}
    {/* <DySlider /> */}
    {/* <DySpace /> */}
    {/* <DyStatistic /> */}
    {/* <DyStatusLight /> */}
    {/* <DySwitch /> */}
    {/* <DyTable /> */}
    {/* <DyTabPanel /> */}
    {/* <DyTabs /> */}
    {/* <DyTag /> */}
    {/* <DyTextMask /> */}
    {/* <DyTimeline /> */}
    {/* <DyTimePanel /> */}
    {/* <DyTimePicker /> */}
    {/* <DyTitle /> */}
    {/* <DyToast /> */}
    {/* <DyTooltip /> */}
    {/* <DyTree /> */}
    {/* <DyUnsafe /> */}
    {/* <DyUse /> */}
    {/* <DyWait /> */}
  </Layout>
}