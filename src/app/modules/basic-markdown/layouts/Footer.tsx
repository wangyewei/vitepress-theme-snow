import { Fragment, defineComponent } from 'vue'
import Signature from '../internal/Signature'
import useLastEditTime from '../../../../hooks/useLastEditTime'

export default defineComponent(() => {
  const [showEditTime, lastEditTime] = useLastEditTime()
  return () => (
    <Fragment>
      <div class="h-5"></div>
      {showEditTime && (
        <p class="text-right paragraph mb-6">Last Edit: {lastEditTime.value}</p>
      )}
      {/*
       * TODO:
       * Receive a Signature component from vitepress-end
       */}
      <div class="signature-animated my-2 flex w-full justify-end size-[64px]">
        <Signature />
      </div>
    </Fragment>
  )
})
