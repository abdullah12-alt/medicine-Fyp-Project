import product_01_image_01 from '../images/calpol.jpg'
import product_01_image_02 from '../images/panadol.jpg'
import product_01_image_03 from '../images/panadol syp.jpg'

import product_02_image_01 from '../images/panadol ex.jpg'
import product_02_image_02 from '../images/disprin.jpg'
import product_02_image_03 from '../images/panadolll.jpg'

import product_03_image_01 from '../images/tenormin.jpg'
import product_03_image_02 from '../images/exapro.jpg'
import product_03_image_03 from '../images/tegral.jpg'

import product_04_image_01 from '../images/flygyl.jpg'
import product_04_image_02 from '../images/ponstan4.jpg'


import product_05_image_01 from '../images/tylenol.jpg'
import product_05_image_02 from '../images/pedialyte.jpg'


import product_06_image_01 from '../images/risek.png'
import product_06_image_02 from '../images/centrum.png'
import product_06_image_03 from '../images/johnsons sham.png'

const products = [
  {
    id: '01',
    title: 'Calpol',
    price: 63.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: 'Children(newborn-5)',

    desc:
      'It is use to relief pain ',
      
  },

  {
    id: '02',
    title:'Panadol Extra',
    price: 20.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: 'Adults',

    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '03',
    title: 'Tenormin 100mg',
    price: 110.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: 'Adults',

    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '04',
    title: 'Flagyl',
    price: 40.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
 
    category: 'Adults',

    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '05',
    title: 'Tylenol',
    price: 24.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
   
    category:'Children(newborn-5)',
     
    desc:
      '',
  },
  {
    id: '06',
    title: 'Calpol Syrup',
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: 'Children(newborn-5)',

    desc:
      '',
  },

  {
    id: '07',
    title: 'Disprin',
    price: 35.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: 'Adults',

    desc:
     '' ,
  },

  {
    id: '08',
    title: 'Exapro',
    price: 200.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: 'Adults',

    desc:
      '',
  },

  {
    id: '09',
    title: 'Ponston forth',
    price: 110.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    
    category: 'Adults',

    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '10',
    title: 'Pedialyte',
    price: 250.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
  
    category: 'Children(newborn-5)',

    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '11',
    title: 'Risek ',
    price: 35.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: 'Adults',

    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '12',
    title: 'Centrum ',
    price: 1200.0,
    image01: product_06_image_02,

    category: 'Others',

    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '13',
    title: 'Jhonsons Shampoo ',
    price: 350.0,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: 'Others',

    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

{
  id: '14',
  title: 'Jhonsons lotion ',
  price: 350.0,
  image01: product_06_image_03,
  image02: product_06_image_02,
  image03: product_06_image_03,
  category: 'Others',

  desc:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
},
]

export default products
