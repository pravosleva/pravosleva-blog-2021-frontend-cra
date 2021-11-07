import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { ResponsiveBlock } from '~/common/material/ResponsiveBlock'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'
import { useStyles } from './styles'
import clsx from 'clsx'

// NOTE: Doc https://brainhubeu.github.io/react-carousel/docs/examples/swipingSlides

export const CustomCarousel = () => {
  const classes = useStyles()
  const handleImgClick = () => {
    console.log('IMG CLICK')
  }

  return (
    <ResponsiveBlock isLimited zeroPaddingMobile>
      <div
        className={classes.wrapper}
        style={{
          backgroundColor: 'transparent'
        }}
      >
        <Carousel
          plugins={[
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: <button className={classes.btn}><MdOutlineArrowBackIos size={30} color='#FFF' /></button>,
                arrowLeftDisabled: <button className={clsx(classes.btn, classes.btnDisabled)}><MdOutlineArrowBackIos size={30} color='#FFF' /></button>,
                arrowRight: <button className={classes.btn}><MdOutlineArrowForwardIos size={30} color='#FFF' /></button>,
                arrowRightDisabled: <button className={clsx(classes.btn, classes.btnDisabled)}><MdOutlineArrowForwardIos size={30} color='#FFF' /></button>,
                addArrowClickHandler: true,
              }
            },
            'infinite',
            // 'fastSwipe',
          ]}
        >
          <img src='https://upload.wikimedia.org/wikipedia/commons/a/a3/Charlie_Puth_-_Attention_%28Official_Single_Cover%29.png' className={classes.img} alt='img' />
          <img src='https://www.psdstamps.com/wp-content/uploads/2020/02/grunge-attention-label-png-768x512.png' className={classes.img} alt='img' />
          <img onClick={handleImgClick} src='https://smithcp.com/wp-content/uploads/2019/12/attention-please.png' className={classes.img} alt='img' />
          <img onClick={handleImgClick} src='https://miro.medium.com/max/1400/1*Rya0YNBpSMVCxRffSV__-Q.png' className={classes.img} alt='img' />
          <img src='https://miro.medium.com/max/1400/1*HjhVU2siOFMaINgNYaPnxw.png' className={classes.img} alt='img' />
        </Carousel>
      </div>
    </ResponsiveBlock>
  )
}