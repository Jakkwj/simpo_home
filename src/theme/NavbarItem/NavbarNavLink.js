// import React, { useEffect, useRef, nextTick } from 'react';
import React from 'react';
import NavbarNavLink from '@theme-original/NavbarItem/NavbarNavLink';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
// import BrowserOnly from '@docusaurus/BrowserOnly';
// import useIsBrowser from '@docusaurus/useIsBrowser';
// import {useLocation} from '@docusaurus/router';


const navDisplay = (docspluginid) => {
  /**
   * 根据是否登录控制 navbar 的显示内容
   * 登录 或者暂未刷新(localStorage.getItem('ifSign') === null) 显示为 'Dashboard', 否则显示为 'Sign In'
   *
   * TODO: 2023.05.22 Mixed Content: The page at was loaded over HTTPS, but requested an insecure frame. This request has been blocked; the content must be served over HTTPS.
   * 估计后端需要搬去 https 才能实现本功能...
   *
   */



  // if (docspluginid === 'Dashboard' && (localStorage.getItem('ifSign') !== 'true' || document.getElementById("iframeIfSign") === null)) {

  // TODO: 2023.05.22 后台升级后再打开以下代码
  // if (docspluginid === 'Dashboard' && (localStorage.getItem('ifSign') !== 'true' || localStorage.getItem('ifSign') === null)) {


  // if (docspluginid === 'Dashboard') {
  //   return null;
  // }
  // if (docspluginid === 'SignIn' && localStorage.getItem('ifSign') === 'true') {
  //   return null;
  // }

  // if (
  //   (docspluginid === 'Dashboard' && localStorage.getItem('ifSign') !== 'true') ||
  //   (docspluginid === 'SignIn' && localStorage.getItem('ifSign') === 'true')
  // ) {
  // console.log(docspluginid, localStorage.getItem('ifSign'));
  // console.log(document.getElementById("iframeIfSign"));
  if (
    (
      docspluginid === 'Dashboard' && (
        localStorage.getItem('ifSign') !== 'true' ||
        localStorage.getItem('ifSign') === null ||
        document.getElementById("iframeIfSign") === null
        )
    ) ||
    (docspluginid === 'SignIn' && localStorage.getItem('ifSign') === 'true')
  ) {
    return null;
  }
  return 'keep';

}

export default function NavbarNavLinkWrapper(props) {

  // console.log(props)
  const { docspluginid } = props;
  // const { className } = props;
  // const location = useLocation();
  // console.log(location.pathname)
  // console.log(className, docspluginid, location.pathname.includes('/docs'))

  // <BrowserOnly>
  //   {() => { // 编译时必须打开, 否则无法识别 localStorage
  //     if (navDisplay(docspluginid) === null) {
  //       return null
  //     }
  //   }}
  // </BrowserOnly>

  if (ExecutionEnvironment.canUseDOM) {
    // console.log('@113', docspluginid, localStorage.getItem('ifSign'), document.getElementById("iframeIfSign"));

    if (navDisplay(docspluginid) === null) {
      return null
    }
  }

  return (
    <>
      <NavbarNavLink {...props} />
    </>
  );
}
