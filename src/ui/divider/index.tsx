import { FC } from 'src/shared'

export const Divider: FC = (props) => (
  <hr
    class="my-4 h-[0.5px] border-0 bg-black !bg-opacity-30 dark:bg-white"
    {...props}
  />
)
