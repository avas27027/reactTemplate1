import Accordion from '../../../shared/components/accordion/Accordion'
import Carousel from '../../../shared/components/carousel/Carousel'
import Counters from '../../../shared/components/counters/Counters'
import DoubleRangeSlider from '../../../shared/components/double-range-slider/DoubleRangeSlider'
import GenericCard from '../../../shared/components/generic-card/GenericCard'
import RegresiveCount from '../../../shared/components/regresive-count/RegresiveCount'
import SlideShow from '../../../shared/components/slide-show/SlideShow'
import './LandingPage.scss'

function LandingPage() {
  const items = [{title:"primero", desc : "aqui va descripcion"}]
  const slides = [<p>hola</p>,<p>hola</p>,<p>hola</p>,<p>hola</p>,<p>hola</p>]
  const counter = [{name: 'primer', desc: 'primer counter', start: 0, end:1000},{name: 'segundo', desc: 'segundo counter', start: 0, end:1000}]
  return (
    <div><p className='font-semibold text-primary-DEFAULT'>landingPage</p>
    <Accordion items={items}></Accordion>
    <Carousel slides={slides} width='100%' columns={2}></Carousel>
    <SlideShow aniVelocity={1000} height='50vh' slides={slides} width='100vw' legend={true}></SlideShow>
    <GenericCard title='card1' desc='Description of card1' width='20vw' picture='https://st4.depositphotos.com/13349494/29831/i/450/depositphotos_298317794-stock-photo-cute-welsh-corgi-puppies-wicker.jpg'></GenericCard>
    <DoubleRangeSlider dispach={(response)=> console.log(response)} max={1000} min={0} step={50}></DoubleRangeSlider>
    <Counters data={counter}></Counters>
    <RegresiveCount targetDate={new Date('2024-08-20')} title='Prueba'></RegresiveCount>
    </div>
  )
}

export default LandingPage