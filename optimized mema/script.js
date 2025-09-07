// Meme data - in a real app, this would come from a database
const memeData = {
    normal: [
        { 
            id: 1, 
            title: 'Funny Meme 1',
            url: 'https://drive.google.com/file/d/1JPqM6z4bGb40xl3QxczLhjp3cc7cIg7c/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1JPqM6z4bGb40xl3QxczLhjp3cc7cIg7c',
            type: 'normal'
        },
        { 
            id: 2, 
            title: 'Funny Meme 2',
            url: 'https://drive.google.com/file/d/1Qwxi5XY3lxprQQ_9PPdojSkXVIMseR8b/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1Qwxi5XY3lxprQQ_9PPdojSkXVIMseR8b',
            type: 'normal'
        },
        { 
            id: 3, 
            title: 'Funny Meme 3',
            url: 'https://drive.google.com/file/d/1SifLTvhM1WbglmVnkXVSYHUFhMEkBZ0g/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1SifLTvhM1WbglmVnkXVSYHUFhMEkBZ0g',
            type: 'normal'
        },
        { 
            id: 4, 
            title: 'Funny Meme 4',
            url: 'https://drive.google.com/file/d/1qy-dzmDkLxXq5sVCnhvdZMJfDTG8Aab4/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1qy-dzmDkLxXq5sVCnhvdZMJfDTG8Aab4',
            type: 'normal'
        },
        { 
            id: 5, 
            title: 'Funny Meme 5',
            url: 'https://drive.google.com/file/d/1z0b82w-zhUeZ95fu0NWlD6qHUHK5oaeZ/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1z0b82w-zhUeZ95fu0NWlD6qHUHK5oaeZ',
            type: 'normal'
        },
        { 
            id: 6, 
            title: 'Funny Meme 6',
            url: 'https://drive.google.com/file/d/19tOLs38Zir594_Vlr2sGWrZKYIAh6OTC/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=19tOLs38Zir594_Vlr2sGWrZKYIAh6OTC',
            type: 'normal'
        },
        { 
            id: 7, 
            title: 'Funny Meme 7',
            url: 'https://drive.google.com/file/d/17IpOj9jeypwlF74Tzga4ckoG3t1Iqz2Z/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=17IpOj9jeypwlF74Tzga4ckoG3t1Iqz2Z',
            type: 'normal'
        },
        { 
            id: 8, 
            title: 'Funny Meme 8',
            url: 'https://drive.google.com/file/d/13ZGbEpRjj5ATGGFsqYG6tjSOw5rRbLWZ/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=13ZGbEpRjj5ATGGFsqYG6tjSOw5rRbLWZ',
            type: 'normal'
        },
        { 
            id: 9, 
            title: 'Funny Meme 9',
            url: 'https://drive.google.com/file/d/1QDh44DoN8vQyFhvKhKwxpxPPrK27MV-H/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1QDh44DoN8vQyFhvKhKwxpxPPrK27MV-H',
            type: 'normal'
        },
        { 
            id: 10, 
            title: 'Funny Meme 10',
            url: 'https://drive.google.com/file/d/1Ld0HR9KhyAcejlQ7JSpYFyoeYSWUN8tB/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1Ld0HR9KhyAcejlQ7JSpYFyoeYSWUN8tB',
            type: 'normal'
        },
        { 
            id: 11, 
            title: 'Funny Meme 11',
            url: 'https://drive.google.com/file/d/1XVKkvQ0r_wNhfe7HMtPsz-zh6tTJ-0ZK/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1XVKkvQ0r_wNhfe7HMtPsz-zh6tTJ-0ZK',
            type: 'normal'
        },
        { 
            id: 12, 
            title: 'Funny Meme 12',
            url: 'https://drive.google.com/file/d/1wMIcTVgjce25ZDnRk8Uqq34kGq7GB5eO/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&nid=1wMIcTVgjce25ZDnRk8Uqq34kGq7GB5eO',
            type: 'normal'
        },
        { 
            id: 13, 
            title: 'Funny Meme 13',
            url: 'https://drive.google.com/file/d/1UbY7fHNM1N2R59LfFshLuzLIxjTyhBYI/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1UbY7fHNM1N2R59LfFshLuzLIxjTyhBYI',
            type: 'normal'
        },
        { 
            id: 14, 
            title: 'Funny Meme 14',
            url: 'https://drive.google.com/file/d/1gXmsnEMlRUQIXNppzlhSczh14xbjjwwV/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1gXmsnEMlRUQIXNppzlhSczh14xbjjwwV',
            type: 'normal'
        },
        { 
            id: 15, 
            title: 'Funny Meme 15',
            url: 'https://drive.google.com/file/d/1Jr4quNuIggCR-nmR_-TThTZWNy-QtxOT/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1Jr4quNuIggCR-nmR_-TThTZWNy-QtxOT',
            type: 'normal'
        },
        { 
            id: 16, 
            title: 'Funny Meme 16',
            url: 'https://drive.google.com/file/d/1AaD-PFcUhNWjdglAa2ViEvq18ReM2F1l/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1AaD-PFcUhNWjdglAa2ViEvq18ReM2F1l',
            type: 'normal'
        },
        { 
            id: 17, 
            title: 'Funny Meme 17',
            url: 'https://drive.google.com/file/d/18G_bTt6jEVp6jcrFCR8oPozuWXreXLtS/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=18G_bTt6jEVp6jcrFCR8oPozuWXreXLtS',
            type: 'normal'
        },
        { 
            id: 18, 
            title: 'Funny Meme 18',
            url: 'https://drive.google.com/file/d/197_pF0Jv3atLB0S6aDepBmZA73_nOs6S/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=197_pF0Jv3atLB0S6aDepBmZA73_nOs6S',
            type: 'normal'
        }
    ],
    green: [
        { 
            id: 101, 
            title: 'Green Screen Meme 1',
            url: 'https://drive.google.com/file/d/11eazFf3myHtuWx56USEilqu4zCDWZUVH/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=11eazFf3myHtuWx56USEilqu4zCDWZUVH',
            type: 'green'
        },
        { 
            id: 102, 
            title: 'Green Screen Meme 2',
            url: 'https://drive.google.com/file/d/1uCkC7x6TuxSWGLifbH9JzcW66UUUCtG8/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1uCkC7x6TuxSWGLifbH9JzcW66UUUCtG8',
            type: 'green'
        },
        { 
            id: 103, 
            title: 'Green Screen Meme 3',
            url: 'https://drive.google.com/file/d/1qvT-sLTQ9Yi9IguEyIYDc4CnNtnut2Vg/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1qvT-sLTQ9Yi9IguEyIYDc4CnNtnut2Vg',
            type: 'green'
        },
        { 
            id: 104, 
            title: 'Green Screen Meme 4',
            url: 'https://drive.google.com/file/d/1VkZcgoiWAp1Gr6RUGZcavthoiLeBEd2F/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1VkZcgoiWAp1Gr6RUGZcavthoiLeBEd2F',
            type: 'green'
        },
        { 
            id: 105, 
            title: 'Green Screen Meme 5',
            url: 'https://drive.google.com/file/d/1Ly1DVS49SgSX-LL7fh5ee9qyfyHYKUk6/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1Ly1DVS49SgSX-LL7fh5ee9qyfyHYKUk6',
            type: 'green'
        },
        { 
            id: 106, 
            title: 'Green Screen Meme 6',
            url: 'https://drive.google.com/file/d/1gb3YJXXior8ofFCjEYwFsYhOjT9tt4Ro/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1gb3YJXXior8ofFCjEYwFsYhOjT9tt4Ro',
            type: 'green'
        },
        { 
            id: 107, 
            title: 'Green Screen Meme 7',
            url: 'https://drive.google.com/file/d/1FrBe18J16S2NVENDsheJwrwy7VhAXar-/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1FrBe18J16S2NVENDsheJwrwy7VhAXar-',
            type: 'green'
        },
        { 
            id: 108, 
            title: 'Green Screen Meme 8',
            url: 'https://drive.google.com/file/d/15MxpLV4TSQrtS5h2dSN-scfvDMlAAgsq/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=15MxpLV4TSQrtS5h2dSN-scfvDMlAAgsq',
            type: 'green'
        },
        { 
            id: 109, 
            title: 'Green Screen Meme 9',
            url: 'https://drive.google.com/file/d/1GxC74YM606dAx9cfS_Xk-_tQA92PBCl-/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1GxC74YM606dAx9cfS_Xk-_tQA92PBCl-',
            type: 'green'
        },
        { 
            id: 110, 
            title: 'Green Screen Meme 10',
            url: 'https://drive.google.com/file/d/1HGzXcRaWMC5HoYIlLUyWdCAdf1jt8iI6/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1HGzXcRaWMC5HoYIlLUyWdCAdf1jt8iI6',
            type: 'green'
        },
        { 
            id: 111, 
            title: 'Green Screen Meme 11',
            url: 'https://drive.google.com/file/d/1tPppPYhvplh6k8WTdgmWU019Fxhowvoy/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1tPppPYhvplh6k8WTdgmWU019Fxhowvoy',
            type: 'green'
        },
        { 
            id: 112, 
            title: 'Green Screen Meme 12',
            url: 'https://drive.google.com/file/d/1dXJvKwJYhKsuqWUPmaC_2Wv5pMe4kvMh/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1dXJvKwJYhKsuqWUPmaC_2Wv5pMe4kvMh',
            type: 'green'
        },
        { 
            id: 113, 
            title: 'Green Screen Meme 13',
            url: 'https://drive.google.com/file/d/1mcMunSZ30-RhGr0op5ssCuzIXhuqfb5-/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1mcMunSZ30-RhGr0op5ssCuzIXhuqfb5-',
            type: 'green'
        },
        { 
            id: 114, 
            title: 'Green Screen Meme 14',
            url: 'https://drive.google.com/file/d/1O-SgLow_Yn9rz6Je9qu6MjV3m54NsW89/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1O-SgLow_Yn9rz6Je9qu6MjV3m54NsW89',
            type: 'green'
        },
        { 
            id: 115, 
            title: 'Green Screen Meme 15',
            url: 'https://drive.google.com/file/d/13b3OmudqPAYPk_OO-ce90H7cTQ_s-Oub/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=13b3OmudqPAYPk_OO-ce90H7cTQ_s-Oub',
            type: 'green'
        },
        { 
            id: 116, 
            title: 'Green Screen Meme 16',
            url: 'https://drive.google.com/file/d/14eZ-yiv5ikGokvm2S59A7xrjZ8LKwNYC/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=14eZ-yiv5ikGokvm2S59A7xrjZ8LKwNYC',
            type: 'green'
        },
        { 
            id: 117, 
            title: 'Green Screen Meme 17',
            url: 'https://drive.google.com/file/d/1mj966tytTY4e1nZyHEDOhZ9q3Q1UOQtO/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1mj966tytTY4e1nZyHEDOhZ9q3Q1UOQtO',
            type: 'green'
        },
        { 
            id: 118, 
            title: 'Green Screen Meme 18',
            url: 'https://drive.google.com/file/d/1FGZI9kl8VIbnuOnw4OQTMy6gK7iQGmeT/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1FGZI9kl8VIbnuOnw4OQTMy6gK7iQGmeT',
            type: 'green'
        },
        { 
            id: 119, 
            title: 'Green Screen Meme 19',
            url: 'https://drive.google.com/file/d/1as9z03lobWAf932qEQObtBrlNxrKacea/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1as9z03lobWAf932qEQObtBrlNxrKacea',
            type: 'green'
        },
        { 
            id: 120, 
            title: 'Green Screen Meme 20',
            url: 'https://drive.google.com/file/d/1CjrZo5LSOkLhJe0SG9MFPmeQ37gFvGun/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1CjrZo5LSOkLhJe0SG9MFPmeQ37gFvGun',
            type: 'green'
        },
        { 
            id: 121, 
            title: 'Green Screen Meme 21',
            url: 'https://drive.google.com/file/d/1zguvN4YuSTGKInr4NS8xyDySOrBOc8Lt/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1zguvN4YuSTGKInr4NS8xyDySOrBOc8Lt',
            type: 'green'
        },
        { 
            id: 122, 
            title: 'Green Screen Meme 22',
            url: 'https://drive.google.com/file/d/1oXhb526caUYJ55bgcSGcNcGFQC525AL5/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1oXhb526caUYJ55bgcSGcNcGFQC525AL5',
            type: 'green'
        },
        { 
            id: 123, 
            title: 'Green Screen Meme 23',
            url: 'https://drive.google.com/file/d/18wkDnwPkGLKfXrL1hNMV9F5dz0b34OE8/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=18wkDnwPkGLKfXrL1hNMV9F5dz0b34OE8',
            type: 'green'
        },
        { 
            id: 124, 
            title: 'Green Screen Meme 24',
            url: 'https://drive.google.com/file/d/1mLBF9cnHJePa1uPnaHtNfdmtnI-GRVEG/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1mLBF9cnHJePa1uPnaHtNfdmtnI-GRVEG',
            type: 'green'
        },
        { 
            id: 125, 
            title: 'Green Screen Meme 25',
            url: 'https://drive.google.com/file/d/1EDteBsGC78d6FpZjpWBIMuQe6RCaWCbk/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1EDteBsGC78d6FpZjpWBIMuQe6RCaWCbk',
            type: 'green'
        },
        { 
            id: 126, 
            title: 'Green Screen Meme 26',
            url: 'https://drive.google.com/file/d/1dcDM7zcxTbsdSv_xrWkcOHt35zsf1YJL/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1dcDM7zcxTbsdSv_xrWkcOHt35zsf1YJL',
            type: 'green'
        },
        { 
            id: 127, 
            title: 'Green Screen Meme 27',
            url: 'https://drive.google.com/file/d/1ob3sRbzTU_rIroyGme__vC-5zE-_aloV/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1ob3sRbzTU_rIroyGme__vC-5zE-_aloV',
            type: 'green'
        },
        { 
            id: 128, 
            title: 'Green Screen Meme 28',
            url: 'https://drive.google.com/file/d/1S5Gfkj2CCoHHRF--FiA2ii0wlMtRguzr/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1S5Gfkj2CCoHHRF--FiA2ii0wlMtRguzr',
            type: 'green'
        },
        { 
            id: 129, 
            title: 'Green Screen Meme 29',
            url: 'https://drive.google.com/file/d/1R5qZU_iqJzXp3WLVf_6Ef8Sb6j7p4woE/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1R5qZU_iqJzXp3WLVf_6Ef8Sb6j7p4woE',
            type: 'green'
        },
        { 
            id: 130, 
            title: 'Green Screen Meme 30',
            url: 'https://drive.google.com/file/d/1pYMMCLqrbbCDZxFIyiJSdkSAF-C0Pwmw/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1pYMMCLqrbbCDZxFIyiJSdkSAF-C0Pwmw',
            type: 'green'
        },
        { 
            id: 131, 
            title: 'Green Screen Meme 31',
            url: 'https://drive.google.com/file/d/1pKdWamTulECtYwLOrewjh9G0vDAhhPgW/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1pKdWamTulECtYwLOrewjh9G0vDAhhPgW',
            type: 'green'
        },
        { 
            id: 132, 
            title: 'Green Screen Meme 32',
            url: 'https://drive.google.com/file/d/1q40HCSrqtDkKXpLP3KWM3aCaRPsSHVdW/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1q40HCSrqtDkKXpLP3KWM3aCaRPsSHVdW',
            type: 'green'
        },
        { 
            id: 103, 
            title: 'Green Screen Meme 3',
            url: 'https://drive.google.com/file/d/1O-SgLow_Yn9rz6Je9qu6MjV3m54NsW89/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1O-SgLow_Yn9rz6Je9qu6MjV3m54NsW89',
            type: 'green'
        },
        { 
            id: 104, 
            title: 'Green Screen Meme 4',
            url: 'https://drive.google.com/file/d/13b3OmudqPAYPk_OO-ce90H7cTQ_s-Oub/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=13b3OmudqPAYPk_OO-ce90H7cTQ_s-Oub',
            type: 'green'
        },
        { 
            id: 105, 
            title: 'Green Screen Meme 5',
            url: 'https://drive.google.com/file/d/14eZ-yiv5ikGokvm2S59A7xrjZ8LKwNYC/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=14eZ-yiv5ikGokvm2S59A7xrjZ8LKwNYC',
            type: 'green'
        },
        { 
            id: 106, 
            title: 'Green Screen Meme 6',
            url: 'https://drive.google.com/file/d/1mj966tytTY4e1nZyHEDOhZ9q3Q1UOQtO/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1mj966tytTY4e1nZyHEDOhZ9q3Q1UOQtO',
            type: 'green'
        },
        { 
            id: 107, 
            title: 'Green Screen Meme 7',
            url: 'https://drive.google.com/file/d/1FGZI9kl8VIbnuOnw4OQTMy6gK7iQGmeT/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1FGZI9kl8VIbnuOnw4OQTMy6gK7iQGmeT',
            type: 'green'
        },
        { 
            id: 108, 
            title: 'Green Screen Meme 8',
            url: 'https://drive.google.com/file/d/1as9z03lobWAf932qEQObtBrlNxrKacea/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1as9z03lobWAf932qEQObtBrlNxrKacea',
            type: 'green'
        },
        { 
            id: 109, 
            title: 'Green Screen Meme 9',
            url: 'https://drive.google.com/file/d/1CjrZo5LSOkLhJe0SG9MFPmeQ37gFvGun/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1CjrZo5LSOkLhJe0SG9MFPmeQ37gFvGun',
            type: 'green'
        },
        { 
            id: 110, 
            title: 'Green Screen Meme 10',
            url: 'https://drive.google.com/file/d/1zguvN4YuSTGKInr4NS8xyDySOrBOc8Lt/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1zguvN4YuSTGKInr4NS8xyDySOrBOc8Lt',
            type: 'green'
        },
        { 
            id: 111, 
            title: 'Green Screen Meme 11',
            url: 'https://drive.google.com/file/d/1oXhb526caUYJ55bgcSGcNcGFQC525AL5/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1oXhb526caUYJ55bgcSGcNcGFQC525AL5',
            type: 'green'
        },
        { 
            id: 112, 
            title: 'Green Screen Meme 12',
            url: 'https://drive.google.com/file/d/18wkDnwPkGLKfXrL1hNMV9F5dz0b34OE8/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=18wkDnwPkGLKfXrL1hNMV9F5dz0b34OE8',
            type: 'green'
        },
        { 
            id: 113, 
            title: 'Green Screen Meme 13',
            url: 'https://drive.google.com/file/d/1mLBF9cnHJePa1uPnaHtNfdmtnI-GRVEG/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1mLBF9cnHJePa1uPnaHtNfdmtnI-GRVEG',
            type: 'green'
        },
        { 
            id: 114, 
            title: 'Green Screen Meme 14',
            url: 'https://drive.google.com/file/d/1EDteBsGC78d6FpZjpWBIMuQe6RCaWCbk/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1EDteBsGC78d6FpZjpWBIMuQe6RCaWCbk',
            type: 'green'
        },
        { 
            id: 115, 
            title: 'Green Screen Meme 15',
            url: 'https://drive.google.com/file/d/1dcDM7zcxTbsdSv_xrWkcOHt35zsf1YJL/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1dcDM7zcxTbsdSv_xrWkcOHt35zsf1YJL',
            type: 'green'
        },
        { 
            id: 116, 
            title: 'Green Screen Meme 16',
            url: 'https://drive.google.com/file/d/1ob3sRbzTU_rIroyGme__vC-5zE-_aloV/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1ob3sRbzTU_rIroyGme__vC-5zE-_aloV',
            type: 'green'
        },
        { 
            id: 117, 
            title: 'Green Screen Meme 17',
            url: 'https://drive.google.com/file/d/1S5Gfkj2CCoHHRF--FiA2ii0wlMtRguzr/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1S5Gfkj2CCoHHRF--FiA2ii0wlMtRguzr',
            type: 'green'
        },
        { 
            id: 118, 
            title: 'Green Screen Meme 18',
            url: 'https://drive.google.com/file/d/1R5qZU_iqJzXp3WLVf_6Ef8Sb6j7p4woE/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1R5qZU_iqJzXp3WLVf_6Ef8Sb6j7p4woE',
            type: 'green'
        },
        { 
            id: 119, 
            title: 'Green Screen Meme 19',
            url: 'https://drive.google.com/file/d/1pYMMCLqrbbCDZxFIyiJSdkSAF-C0Pwmw/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1pYMMCLqrbbCDZxFIyiJSdkSAF-C0Pwmw',
            type: 'green'
        },
        { 
            id: 120, 
            title: 'Green Screen Meme 20',
            url: 'https://drive.google.com/file/d/1pKdWamTulECtYwLOrewjh9G0vDAhhPgW/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1pKdWamTulECtYwLOrewjh9G0vDAhhPgW',
            type: 'green'
        },
        { 
            id: 121, 
            title: 'Green Screen Meme 21',
            url: 'https://drive.google.com/file/d/1q40HCSrqtDkKXpLP3KWM3aCaRPsSHVdW/preview',
            downloadUrl: 'https://drive.google.com/uc?export=download&id=1q40HCSrqtDkKXpLP3KWM3aCaRPsSHVdW',
            type: 'green'
        }
    ]
};

// DOM Elements
const memeContainer = document.getElementById('memeContainer');
const searchInput = document.getElementById('searchInput');
const tabButtons = document.querySelectorAll('.tab-btn');
const themeToggle = document.getElementById('themeToggle');

// Theme Management
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

// Apply saved theme, or user's OS preference
function applyInitialTheme() {
    // Prevent flash of unstyled content
    document.documentElement.style.visibility = 'hidden';
    
    if (currentTheme === 'light' || (!currentTheme && !prefersDarkScheme.matches)) {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    // Show content after theme is applied
    setTimeout(() => {
        document.documentElement.style.visibility = 'visible';
    }, 50);
}

// Initialize theme
applyInitialTheme();

// Theme Toggle
function toggleTheme() {
    // Add transition class for smooth theme change
    document.documentElement.classList.add('transition');
    
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Set the new theme
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update button state
    updateThemeButton(newTheme);
    
    // Remove transition class after animation completes
    setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 300);
}

function updateThemeButton(theme) {
    const moonIcon = themeToggle.querySelector('.fa-moon');
    const sunIcon = themeToggle.querySelector('.fa-sun');
    
    if (theme === 'light') {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
}

// Initialize button state
updateThemeButton(document.documentElement.getAttribute('data-theme'));

// Current state
let currentTab = 'all';
let searchQuery = '';

// Initialize the app
function init() {
    renderMemes();
    setupEventListeners();
}

// Set up event listeners
function setupEventListeners() {
    // Tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => switchTab(button.dataset.tab));
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderMemes();
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Listen for system theme changes
    prefersDarkScheme.addListener(e => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateThemeButton(newTheme);
        }
    });
}

// Switch between tabs
function switchTab(tab) {
    currentTab = tab;
    
    // Update active tab button
    tabButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.tab === tab);
    });
    
    renderMemes();
}

// Filter memes based on current tab and search query
function getFilteredMemes() {
    let memes = [];
    
    // Get memes based on current tab
    if (currentTab === 'all') {
        memes = [...memeData.normal, ...memeData.green];
    } else if (currentTab === 'normal') {
        memes = [...memeData.normal];
    } else if (currentTab === 'green') {
        memes = [...memeData.green];
    }
    
    // Filter by search query if any
    if (searchQuery) {
        memes = memes.filter(meme => {
            const title = getMemeTitle(meme).toLowerCase();
            const originalTitle = getFilenameFromUrl(meme.url).toLowerCase();
            
            return (
                title.includes(searchQuery) ||
                originalTitle.includes(searchQuery) ||
                meme.type.toLowerCase().includes(searchQuery)
            );
        });
    }
    
    return memes;
}

// Render memes to the DOM
function renderMemes() {
    const memes = getFilteredMemes();
    
    if (memes.length === 0) {
        memeContainer.innerHTML = '<p class="no-results">No memes found. Try a different search or check back later!</p>';
        return;
    }
    
    const memeCards = memes.map(meme => createMemeCard(meme)).join('');
    memeContainer.innerHTML = memeCards;
}

// Simple string hashing function for consistent title generation
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

// Fun title generators
const titleGenerators = {
    normal: [
        'Epic Fail Compilation',
        'Meme of the Day',
        'Classic Internet Gold',
        'Cracked Me Up',
        'Viral Sensation',
        'Internet Legend',
        'Meme Masterpiece',
        'LOL Generator',
        'Trending Now',
        'Meme Magic'
    ],
    green: [
        'Green Screen Gold',
        'Edit This!',
        'Creator\'s Canvas',
        'Make It Viral',
        'Endless Possibilities',
        'Your Meme Here',
        'Edit & Share',
        'Go Crazy!',
        'Green Screen Fun',
        'Make It Yours'
    ]
};

// Get a random title based on meme type
function getRandomTitle(type) {
    const titles = titleGenerators[type] || titleGenerators.normal;
    return titles[Math.floor(Math.random() * titles.length)];
}

// Extract filename from URL
function getFilenameFromUrl(url) {
    // Extract the part after the last / and before any query parameters
    const filename = url.split('/').pop().split('?')[0];
    // Remove the file extension and any preview parameters
    return decodeURIComponent(filename)
        .replace(/\.[^/.]+$/, '')  // Remove file extension
        .replace(/_/g, ' ');        // Replace underscores with spaces
}

// Get consistent title for a meme based on its URL
function getMemeTitle(meme) {
    const titleIndex = Math.abs(hashCode(meme.url)) % titleGenerators[meme.type].length;
    const funTitle = titleGenerators[meme.type][titleIndex];
    const randomNum = Math.abs(hashCode(meme.url)) % 9000 + 1000; // Consistent random number per URL
    return `${funTitle} #${randomNum}`;
}

// Create HTML for a single meme card
function createMemeCard(meme) {
    const title = getMemeTitle(meme);
    
    return `
        <div class="meme-card" data-type="${meme.type}">
            <div class="meme-header">
                <span class="meme-type ${meme.type}">${meme.type.toUpperCase()}</span>
            </div>
            <iframe 
                class="meme-video" 
                src="${meme.url}" 
                title="${title}"
                allow="autoplay"
                allowfullscreen>
            </iframe>
            <div class="meme-actions">
                <span class="meme-title" title="${title}">${title}</span>
                <a href="${meme.downloadUrl}" class="download-btn" download>
                    <i class="fas fa-download"></i> Download
                </a>
            </div>
        </div>
    `;
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);
