// import { theme } from "antd";
import './Introduction.css';

const Introduction = () => {
  // const { token: { boxShadow, borderRadius }, } = theme.useToken();

  return (
    <div className="flex-center">
      <div className="card-intro">
        <div>
          <h2>Motivasi 🚀</h2>
          <p>Jadi gini, kalo gue gabut gue tuh suka banget nongkrong depan laptop 👨‍💻. Browsing hal-hal baru yang seru. Makin sering gue browsingan, makin sering juga gue nemu website-website yang keren dan bermanfaat. Nah, satu waktu gue kepikiran 🤔 "kenapa ga gue kumpulin ajatuh website/tools yang keren itu tadi, selain buat arsip gue pribadi, siapa tau bermanfaat juga buat orang laen".</p>
          <p>Nah, dari sinilah lahir NiceList 🎉. Gue kasi nama demikian ya sesimple Daftar Keren (Nice List). Sebenernya bisa aja taro di notes terus di share aja gitu kan, tapi makin banyak daftar website/tools yang gue kumpulin, makin berantakan gitu deh 🥴. Jadi gue kepikiran yauda biar mudah di navigasi, NiceList ini gue bikin jadi website aja 🌐.</p>
          <p>Ini merupakan proyek yang berkepanjangan, jadi dari waktu ke waktu gue bakal update terus secara berkala 👀, tentunya kalo gue nemu website/tools yang keren lagi. So, selamat menjelajah manfaat nyata dari samudera internet! ✨</p>
          <h3 className='css-animation'>{ window.innerWidth < 768 ? "Klik menu di atas kiri ✌️" : "" }</h3>
        </div>
      </div>
    </div>
  )
}

export default Introduction