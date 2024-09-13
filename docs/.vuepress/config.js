
module.exports = {
  title: "LQ",
  description: "欢迎来到LQ的博客",
  plugins: [
    "@vuepress/plugin-medium-zoom"
  ],
  markdown: {
    lineNumbers: true //代码块显示行号

  },
  // theme: "reco",
  themeConfig: {
    sidebarDepth: 2,
    logo: "/菠萝.jpg",
    nav: [
      { text: "首页", link: "/" },
      { text: "前端笔记",
        items: [
          { text:"Node.js", link:"/blogs/node/01"}
        ] },

      {
        text: "项目",
        items: [
          { text: "小兔鲜H5笔记", link: "/项目/小兔鲜H5" },
          { text: "小兔鲜uniapp笔记", link: "/项目/小兔鲜uniapp" },
        ],
      },
      {
        text: "其它笔记",
        items: [
          { text: "css笔记", link: "/guide/test03" },
          { text: "Markdown", link: "/about/Markdown教程" },
        ],
      },
    ],
    sidebar: {
      "/blogs/node/":['01','02','03'],
      "/项目/": [
        {
          title: "项目开始",
          sidebarDepth: 2,
          collapsable: true,
          children: [
            { title: "小兔鲜H5", path: "/项目/小兔鲜H5" },
            { title: "小兔鲜uniapp", path: "/项目/小兔鲜uniapp" },
          ],
        },
      ],
      "/about/": [
        {
          title: "Markdown",
          collapsable: true, //下级列表可折叠
          children: ["Markdown教程", "安全", "总结"],
        },
      ],
      "/guide/": ["test01", "test02", "test03"],
      "/blogs/": [""],
    },

    // sidebar: {
    //   '/blogs/': [
    //     '',     /* /foo/ */
    //     '前端/1.md',  /* /foo/one.html */
    //     '后端/1.md'   /* /foo/two.html */
    //   ]
    // },
    // blogConfig: {
    //   category: {
    //     location: 2,
    //     text: "博客",
    //   },
    //   tag: {
    //     location: 4,
    //     text: "Tag",
    //   },
    // }
  },
};
