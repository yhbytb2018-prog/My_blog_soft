import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'>我们的爱</span>
      <a
        href='https://soft.qqsea.top/'
        className='underline justify-start'>
        永远不变 {siteConfig('VERSION')}
      </a>
      .
    </div>
  )
}
