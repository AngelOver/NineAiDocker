"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginDefaultList = void 0;
exports.PluginDefaultList = [
    {
        pluginName: '不使用插件',
        pluginModelName: '',
        describe: '纯粹的AI对话模型、你可以体验各种各样的模型、在不同模型中切换自如、直接对我进行问答吧！',
        icon: 'carbon:close-outline',
        id: 0,
        pluginLayout: 'text',
        upload: false,
        demo: [
            {
                pic: '',
                type: 'text',
                prompt: 'AI现有发展对人们的生活有显著性提升么？',
                logo: '',
            },
            {
                pic: '',
                type: 'text',
                prompt: '未来的AI可能会是什么样子的呢？',
                logo: '',
            },
        ],
    },
    {
        pluginName: 'NineAi智能客服',
        pluginModelName: 'NineAi-bot',
        describe: '智能客服、如果对系统使用有疑问、我会回答关于你NineAi系统的一切问题！',
        icon: 'mdi:robot-outline',
        id: 1,
        pluginLayout: 'text',
        upload: false,
        demo: [
            {
                pic: '',
                type: 'text',
                prompt: 'NineAi的正版作者是谁？',
                logo: '',
            },
            {
                pic: '',
                type: 'text',
                prompt: 'NineAi的需要的环境是什么？',
                logo: '',
            },
        ],
    },
    {
        pluginName: 'Dall-E文生图',
        pluginModelName: 'gpt-4-dalle',
        describe: '采用Dall-E模型生成图片、你可以对图片进行描述详细描述、快速生成图片。',
        icon: 'ic:outline-draw',
        id: 2,
        pluginLayout: 'text',
        upload: false,
        demo: [
            {
                pic: '',
                type: 'text',
                prompt: '一个N主题的logo、充满未来科技感！',
                logo: '',
            },
            {
                pic: '',
                type: 'text',
                prompt: '设计一个龙年的壁画、凸出喜庆的氛围!',
                logo: '',
            },
        ],
    },
    {
        pluginName: 'Midjourney文生图',
        pluginModelName: 'mj-chat',
        describe: '基于midjourney模型的AI绘图、同步官方、尽情发挥你的想象力吧！',
        icon: 'material-symbols:draw-rounded',
        id: 3,
        pluginLayout: 'text',
        upload: false,
        demo: [
            {
                pic: '',
                type: 'text',
                prompt: 'Firefighters, cartoon characters --ar 1:1 --style raw --v 5.2 --upbeta',
                logo: '',
            },
            {
                pic: '',
                type: 'text',
                prompt: 'Kobe and James play basketball. Kobe throws the last ball at the last minute to win the game',
                logo: '',
            },
        ],
    },
    {
        pluginName: 'SD文生图',
        pluginModelName: 'stable-diffusion',
        describe: '基于stable-diffusion模型的文生图、此模型速度较快、但是生成的图片质量欠缺。',
        icon: 'material-symbols-light:video-stable-outline',
        pluginLayout: 'text',
        id: 4,
        upload: false,
        demo: [
            {
                pic: '',
                type: 'text',
                prompt: '一个小男孩在门口打雪仗！',
                logo: '',
            },
            {
                pic: '',
                type: 'text',
                prompt: '设计一个科技主题的Logo、以N为核心！',
                logo: '',
            },
        ],
    },
    {
        pluginName: '文档分析',
        pluginModelName: 'gpt-4-all',
        describe: '可基于文档进行识别、完成摘要、问答、创作等任务，仅支持10MB以内文档。',
        icon: 'mi:document',
        id: 5,
        pluginLayout: 'text',
        upload: true,
        uploadIcon: 'fe:document',
        uploadTitle: '上传文档',
        uploadType: 'document',
        uploadLimit: ['application/pdf', 'application/msword'],
        demo: [
            {
                type: 'document',
                name: '6月时政.pdf',
                url: 'https://nineai-v1.oss-cn-shanghai.aliyuncs.com/files/6%E6%9C%88%E6%97%B6%E6%94%BF.pdf',
                icon: 'vscode-icons:file-type-pdf2',
            },
            {
                url: 'https://nineai-v1.oss-cn-shanghai.aliyuncs.com/files/%E7%94%B3%E8%AE%BA%E4%B8%87%E8%83%BD%E5%8F%A5%E5%9E%8B%E5%92%8C%E5%AF%B9%E7%AD%96%E6%B1%87%E6%80%BB.pdf',
                name: '申论万能句型和对策汇总.pdf',
                type: 'document',
                icon: 'vscode-icons:file-type-pdf2',
            },
        ],
    },
    {
        pluginName: '说图解画',
        pluginModelName: 'gpt-4-all',
        uploadType: 'img',
        uploadLimit: ['image/png', 'image/jpeg', 'image/jpg', 'image/bmp', 'image/webp'],
        describe: '基于图片进行文字创作、回答问题，帮你写文案、想故事。暂仅支持10MB以内的图片!',
        icon: 'fluent:draw-image-24-regular',
        id: 6,
        pluginLayout: 'images',
        upload: true,
        uploadIcon: 'ion:image-outline',
        uploadTitle: '上传图片',
        demo: [
            {
                url: 'https://s11.ax1x.com/2024/01/21/pFVmn0S.png',
                type: 'image',
                prompt: '',
                logo: '',
            },
            {
                url: 'https://s11.ax1x.com/2024/01/21/pFVmMkQ.png',
                type: 'image',
                prompt: '',
                logo: '',
            },
        ],
    },
    {
        pluginName: '二维码生成',
        pluginModelName: 'gpt-3.5-turbo-16k',
        describe: '将网址快速转化为二维码、更加便捷的访问您的网站！',
        icon: 'mdi:qrcode',
        id: 7,
        pluginLayout: 'text',
        upload: false,
        demo: [
            {
                pic: '',
                type: 'text',
                prompt: '帮我生成百度的二维码图片？',
                logo: '',
            },
            {
                pic: '',
                type: 'text',
                prompt: '帮我生成谷歌的二维码图片？',
                logo: '',
            },
        ],
    },
];