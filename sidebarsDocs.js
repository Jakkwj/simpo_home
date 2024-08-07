/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  // tutorialSidebar: [
  docs: [
    // 'Introduction',
    'QucikStart',
    // 'Tutorials',
    {
      type: 'category',
      label: 'Tutorials',
      collapsible: true,
      collapsed: false,
      "link": {
        // "type": "generated-index",
        // "description": "Tutorials of SIMPO."
        type: 'doc',
        id: 'Tutorials/Tutorials', // Tutorials/Tutorials.mdx

      },
      items: [
        'Tutorials/Installtion',
        'Tutorials/BioModel',
        'Tutorials/DataSet',
        'Tutorials/Project',

      //   {
      //     type: 'category',
      //     label: 'Case Study',
      //     "link": {
      //       // "type": "generated-index",
      //       // "description": "Case Study of SIMPO."
      //       type: 'doc',
      //       id: 'Case Study',
      // },
      //     items: [
      //       'Case Study/ASM1',
      //     ]
      //   },



        // {
        //   type: 'category',
        //   label: 'SIMPO Pro',
        //   items: [
        //     'Changelog/SIMPO Pro/2023',
        //     'Changelog/SIMPO Pro/2022',
        //   ]
        // },
        // {
        //   type: 'category',
        //   label: 'SIMPO Dashboard',
        //   items: [
        //     'Changelog/SIMPO Dashboard/2023',
        //     'Changelog/SIMPO Dashboard/2022',
        //     'Changelog/SIMPO Dashboard/2021'
        //   ]
        // },


      ],
    },

    {
      type: 'category',
      label: 'Case Study',
      collapsible: true,
      collapsed: true,
      "link": {
        "type": "generated-index",
        "description": "Case Study of SIMPO."
        // type: 'doc',
        // id: 'Case Study',
      },
      items: [
        // 'Case Study/ASM1',

        {
          type: 'category',
          label: 'AQUASIM',
          items: [
            'CaseStudy/AQUASIM/T2P17',
          ]
        },

        {
          type: 'category',
          label: 'Biological Wastewater Treatment: Examples and Exercises',
          items: [
            'CaseStudy/Biological Wastewater Treatment: Examples and Exercises/BWTEE 2.3.4',
          ]
        },




      ]
    },

    'Tips',



    // {
    //   type: 'category',
    //   label: 'Changelog',
    //   "link": {
    //     "type": "generated-index",
    //     "description": "Changelog of the core source code of SIMPO."
    //     // type: 'doc',
    //     // id: 'Changelog/index',
    //   },
    //   items: [

    //     {
    //       type: 'category',
    //       label: 'SIMPO Client',
    //       items: [
    //         'Changelog/SIMPO Client/2023',
    //       ]
    //     },

    //     {
    //       type: 'category',
    //       label: 'SIMPO Dash',
    //       items: [
    //         'Changelog/SIMPO Dash/2024',
    //         'Changelog/SIMPO Dash/2023',
    //         'Changelog/SIMPO Dash/2022',
    //         'Changelog/SIMPO Dash/2021'
    //       ]
    //     },

    //     {
    //       type: 'category',
    //       label: 'SIMPO',
    //       items: [
    //         'Changelog/SIMPO/2024',
    //         'Changelog/SIMPO/2023',
    //         'Changelog/SIMPO/2022',
    //         'Changelog/SIMPO/2021'
    //       ]
    //     },

    //     {
    //       type: 'category',
    //       label: 'SIMPO Pro',
    //       items: [
    //         'Changelog/SIMPO Pro/2024',
    //         'Changelog/SIMPO Pro/2023',
    //         'Changelog/SIMPO Pro/2022',
    //       ]
    //     },


    //     // {
    //     //   type: 'doc',
    //     //   id: 'Changelog/SIMPO/2023',
    //     // },
    //   ],
    // },

    // {
    //   type: 'category',
    //   label: 'Changelog',
    //   items: ['tutorial-basics/create-a-document'],
    // },
  ],

};

module.exports = sidebars;
