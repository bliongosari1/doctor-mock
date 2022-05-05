// import { shuffle } from 'lodash';
// import { GP } from '../../models/GPLinkingModel';

// const defaultGPList: GP[] = [
//     {
//         name: 'Tom',
//         id: '1',
//         image: 'https://www.oscer.ai/static/media/about-team-tom-kelly.27803d9b.png',
//         onHeidi: true,
//     },
//     {
//         name: 'Kelly',
//         id: '2',
//         image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/29/15/hp.jpg?quality=75&width=982&height=726&auto=webp',
//         onHeidi: false,
//     },
//     {
//         name: 'Kerry',
//         id: '3',
//         image: 'https://imgix.pedestrian.tv/content/uploads/2021/06/13/doge-auction-.jpg?ar=16%3A9&auto=format&crop=focal&fit=crop&q=65&w=1200',
//         onHeidi: true,
//     },
//     {
//         name: 'Steve',
//         id: '4',
//         image: 'https://www.stevechanvii.me/static/c5a71e99761a18f3857bdfc03fd67e63/2a4de/img-me.png',
//         onHeidi: false,
//     },
//     {
//         name: 'Peter',
//         id: '5',
//         image: 'https://image.binance.vision/uploads/0ee9d7d59d424a7c8bd7d70c86070beb.png',
//         onHeidi: false,
//     },
// ];

const getGPs = () => {
    return new Promise((resolve) => {
        // API call
        setTimeout(() => {
            // resolve(shuffle(defaultGPList));
        }, 1000);
    });
};

export default getGPs;
