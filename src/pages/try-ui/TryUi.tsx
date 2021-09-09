import { ResponsiveBlock } from '~/common/material/ResponsiveBlock'
import { FlippedSample, ServerInfo } from './components'
import { SpringSlider } from '~/common/react-spring'
// import { useWindowSize } from '~/common/hooks'
import Icon from '@mdi/react'
import { mdiArrowRight, mdiArrowLeft } from '@mdi/js'
// import { md } from '~/common/material/theme'
// import Countdown from 'react-countdown'
// import { StateCounterSample } from './components'

export const TryUi = () => {
  // const { isDesktop } = useWindowSize()

  return (
    <>
      <ResponsiveBlock>
        <SpringSlider
          autoplay={true}
          delay={7000}
          duration={500}
          leftBtnInternalRenderer={() => <Icon path={mdiArrowLeft} size={1} />}
          rightBtnInternalRenderer={() => <Icon path={mdiArrowRight} size={1} />}
          data={[
            {
              id: 0,
              url: 'https://minuteluxe.com/wp-content/uploads/2021/05/tw-rise-of-tech.jpg',
              text: 'One',
            },
            {
              id: 1,
              url: 'https://www.channelfutures.com/files/2020/08/Global-Future-and-Technology-1.jpg',
              text: 'Two',
            },
            {
              id: 2,
              url: 'https://www.edb.gov.sg/content/dam/edb-en/insights/headquarters/southeast-asia-the-next-growth-frontier-for-tech-companies/masthead-d-1920x815.jpg',
              text: 'Three',
            },
            {
              id: 3,
              url: 'https://csis-website-prod.s3.amazonaws.com/s3fs-public/styles/csis_banner/public/publication/190215_Asia.jpg?itok=G3PNCOZH',
              text: 'Four',
            },
            {
              id: 4,
              url: 'https://knowledge.insead.edu/sites/www.insead.edu/files/images/2017/07/istock-493321081.jpg',
              text: 'Five',
            },
          ]}
          itemRenderer={({
            text,
            // timer,
          }) => {
            // const now = Date.now()
            // const dateEnd = now + timer.ms
            // const dateStart = new Date(now + timer.ms)
          
            return (
              <div
                style={{
                  height: '100%',
                  width: '100%',
                  maxWidth: '100vw',
                  // maxWidth: `${md - 32}px`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <h1
                  style={{
                    fontSize: '5em',
                    fontWeight: 'bold',
                    letterSpacing: '0.2em',
                  }}
                >{text}</h1>
                {/* <StateCounterSample
                  dateStart={dateStart}
                  doneMsg='Done'
                  waitMsg={`Wait for ${(timer.ms / 1000).toFixed(0)}s`}
                /> */}
                {/* <Countdown date={dateEnd} /> */}
              </div>
            )
          }}
        />
      </ResponsiveBlock>
      <ResponsiveBlock isLimited={true}>
        <>
          <h1>Try UI</h1>
          <h2>react-spring</h2>
          <div style={{ marginBottom: '32px' }}>
            <FlippedSample />
          </div>
        </>
      </ResponsiveBlock>
      
      <ResponsiveBlock isLimited={true}>
        <>
          <h2>Server info</h2>
          <ServerInfo />
        </>
      </ResponsiveBlock>
    </>
  )
}