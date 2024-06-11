import { FC } from '@/shared'
import type { FunctionalComponent, SVGAttributes } from 'vue'

export const FaFillArrowDown: FunctionalComponent<SVGAttributes> = (props) => (
  <svg
    class="icon-[mingcute--right-line]"
    viewBox="0 0 1024 1024"
    width="24"
    height="24"
    {...{ props }}
  >
    <path
      d="M491.52 737.28c-12.57472 0-20.93056-4.17792-29.32736-12.53376l-326.73792-326.0416a40.3456 40.3456 0 0 1 0-58.49088 40.5504 40.5504 0 0 1 58.65472 0L491.52 636.96896l297.41056-296.7552a40.5504 40.5504 0 0 1 58.65472 0 40.3456 40.3456 0 0 1 0 58.53184l-326.73792 326.00064c-8.3968 8.35584-16.7936 12.53376-29.32736 12.53376z"
      fill="currentcolor"
      p-id="933"
    />
  </svg>
)

export const FaSolidArrowRight: FC<SVGAttributes> = (props) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path
      d="M728.223744 520.22784a42.467328 42.467328 0 0 1-11.393024 20.503552L374.90688 882.65728c-16.662528 16.662528-43.677696 16.662528-60.340224 0s-16.662528-43.677696 0-60.340224L626.449408 510.43328 314.614784 198.598656c-16.662528-16.662528-16.662528-43.677696 0-60.340224 16.661504-16.662528 43.676672-16.662528 60.3392 0L716.879872 480.18432c10.860544 10.860544 14.642176 26.120192 11.343872 40.04352z"
      fill="currentcolor"
    />
  </svg>
)
