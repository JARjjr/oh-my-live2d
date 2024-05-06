import { loadOml2d } from 'oh-my-live2d';

import typescriptLogo from './typescript.svg';
import './style.css';
import '//at.alicdn.com/t/c/font_2679099_hchompi0roq.js';

const foo = async () => {
  const oml2d = await loadOml2d({
    // parentElement: el,
    // importType: 'complete',
    // dockedPosition: 'right',
    mobileDisplay: false,
    primaryColor: 'pink',

    models: [
      {
        path: 'https://model.oml2d.com/shizuku/shizuku.model.json',
        scale: 0.2,
        // volume: 0,
        position: [70, 70],
        // volume: 0.5,
        showHitAreaFrames: true,
        stageStyle: {
          height: 370,
          width: 400
        }
      },

      // {
      //   rotation: 30,
      //   path: '/models/Pio/model.json',
      //   motionPreloadStrategy: 'ALL', showHitAreaFrames: true,
      //   scale: 0.4
      // },
      // {
      //   name: 'shizuku',
      //   path: [
      //     'https://cdn.jsdelivr.net/gh/kisssssssss/model/live2d/Azur/dafeng_2/dafeng_2.model3.json',
      //     'https://cdn.jsdelivr.net/gh/kisssssssss/model/live2d/Azur/dafeng_4/dafeng_4.model3.json'
      //   ],
      //   // rotation: 360,
      //   // anchor: [0.5, 0.1],
      //   motionPreloadStrategy: 'ALL',
      //   volume: 0
      // },
      // {
      //   path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
      //   mobileScale: 0.08
      // },
      {
        path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Pio/model.json',
        scale: 0.4,
        position: [0, 0],
        mobileScale: 0.35,
        stageStyle: {
          // height: 300
        }
      }
    ],
    tips: (_model, index) => {
      if (index === 0) {
        return {
          copyTips: {
            message: ['sssssssssssssssss']
          },
          idleTips: {
            wordTheDay: true
          }
        };
      }
      return {
        copyTips: {
          message: ['aaaaaaaaaaaaaaaaaaa']
        }
      };
    },
    statusBar: {
      loadingMessage: '正在加载',
      restMessage: '睡着了',
      disable: false,
      style: {}
    }
    // menus: (_currentModel, index) => {
    //   // console.log(currentModel);
    //   // console.log(index);
    //   if (index === 0) {
    //     return {
    //       disable: false,
    //       items: (defaultItems) => {
    //         return defaultItems;
    //       }
    //     };
    //   } else {
    //     return {
    //       style: {
    //         // left: 0
    //       },
    //       items: (defaultItem) => {
    //         return [defaultItem[1]];
    //       }
    //     };
    //   }
    // }
    // menus: {
    //   items: (defaultItems) => {
    //     return defaultItems;
    //     // console.log(oml2d.modelIndex);
    //     // if (oml2d.modelIndex === 0) {
    //     //   return [
    //     //     defaultItems[1],
    //     //     {
    //     //       id: 'github',
    //     //       icon: 'github-fill',
    //     //       title: '我的github',
    //     //       onClick() {
    //     //         window.open('https://github.com/hacxy');
    //     //       }
    //     //     }
    //     //   ];
    //     // } else {
    //     //   return defaultItems;
    //     // }
    //   }
    //   // disable: true
    //   // items: [
    //   //   {
    //   //     id: 'github',
    //   //     icon: 'github-fill',
    //   //     title: '我的github',
    //   //     onClick() {
    //   //       window.open('https://github.com/hacxy');
    //   //     }
    //   //   }
    //   // ]
    // }
  });
  oml2d.onLoad((status) => {
    switch (status) {
      case 'success':
        // oml2d.options.models[0].scale = 0.1;
        // if (oml2d.modelIndex === 1) {
        //   oml2d.options.dockedPosition = 'left';
        // } else {
        //   oml2d.options.dockedPosition = 'right';
        // }
        console.log('加载成功');
        return;
      case 'fail':
        console.log('加载失败');
        return;
      case 'loading':
        console.log('正在加载中');
        return;
    }
  });

  oml2d.onStageSlideIn(() => {
    // oml2d.setStageSize({ width: 600, height: 600 });
    console.log(oml2d.model);
  });
  // oml2d.onStageSlideIn(() => {
  //   console.log('111');
  //   setTimeout(() => {
  //     oml2d.setStageSize({ height: 300 });
  //   }, 1000);
  //   // setInterval(() => {
  //   //   i = i + 0.01;
  //   //   // oml2d.setModelScale(i);
  //   // }, 100);
  //   setTimeout(() => {
  //     // oml2d.setModelPotions(0, 200);
  //   }, 1000);

  //   setTimeout(() => {
  //     // oml2d.setModelPotions(0, -50);
  //   }, 2000);
  //   // oml2d.tipsMessage('Oh My Live2D!', 1000, 9);
  //   // oml2d.loadNextModel();
  // });

  // oml2d.loadNextModel();
  // oml2d.clearTips();
  // oml2d.reloadModel();
  // oml2d.setStatusBarClickEvent();
  // oml2d.stageSlideIn();
  // oml2d.tipsMessage();
  // oml2d.statusBarPopup();
  // setTimeout(() => {}, 10000);
  // console.log(oml2d);
  // oml2d.loadNextModel();

  // await loadOml2d({
  //   models: [
  //     {
  //       path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
  //       stageStyle: {},
  //       mobileScale: 0.08
  //     }
  //   ]
  // });

  // setTimeout(() => {
  //   oml2d.loadNextModel();
  //   console.log('ssssssssssssss');
  // }, 1000);

  // const oml2d2 = await loadOml2d({
  //   models: [
  //     {
  //       path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
  //       stageStyle: {},
  //       mobileScale: 0.08
  //     }
  //   ]
  // });
  // oml2d2.onStageSlideIn(() => {
  //   console.log(222);
  // });
  // loadOml2d({
  //   models: [
  //     {
  //       path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
  //       stageStyle: {},
  //       mobileScale: 0.08
  //     }
  //   ]
  // });
  // loadOml2d({
  //   models: [
  //     {
  //       path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
  //       stageStyle: {},
  //       mobileScale: 0.08
  //     }
  //   ]
  // });
  // loadOml2d({
  //   models: [
  //     {
  //       path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
  //       stageStyle: {},
  //       mobileScale: 0.08
  //     }
  //   ]
  // });
  // loadOml2d({
  //   models: [
  //     {
  //       path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json',
  //       stageStyle: {},
  //       mobileScale: 0.08
  //     }
  //   ]
  // });
  // console.log(test1, 'test1');

  // console.log(test2, 'test2');

  // setTimeout(() => {
  //   test2.loadNextModel();
  // }, 1000);
};

foo();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;
