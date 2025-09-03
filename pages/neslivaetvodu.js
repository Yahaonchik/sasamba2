import React, { useState } from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import MainFooter from '../components/MainFooter'
import SEOHead from '../components/SEOHead'
import PageNavigation from '../components/PageNavigation'
const OrderModal = dynamic(() => import('../components/OrderModal'), { ssr: false })
import Breadcrumbs from '../components/Breadcrumbs'
import dynamic from 'next/dynamic'
const RelatedArticles = dynamic(() => import('../components/RelatedArticles'), { ssr: false })
import AnchorLinksSection from '../components/AnchorLinksSection'
const CallMasterSection = dynamic(() => import('../components/CallMasterSection'))
import InterestingAside from '../components/InterestingAside'
import { getSEOData } from '../utils/seoConfig'
import { getProblemPageStructuredData } from '../utils/structuredData'

const Page = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const seoData = getSEOData('/neslivaetvodu')
  const baseUrl = 'https://remstirmash.od.ua'
  const structuredData = getProblemPageStructuredData(
    'Ремонт стиральной машины которая не сливает воду',
    'Профессиональный ремонт стиральных машин которые не сливают воду в Одессе. Диагностика, чистка фильтров, ремонт насоса.',
    `${baseUrl}/neslivaetvodu`
  )

  return (
    <>
      <div className="page-container10">
        <SEOHead
          title={seoData.title}
          description={seoData.description}
          keywords={seoData.keywords}
          canonical={`${baseUrl}/neslivaetvodu`}
          structuredData={structuredData}
        />
        <Header />
        <Breadcrumbs style="white-left" />
        <main className="page-main">
          <div className="page-left-main-box">

            <div className="page-headertextwashermachine">
              <h1 className="page-text10">
                <span className="page-text11">
                  Стиральная машина не сливает воду —
                </span>
                <span className="page-text12">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="page-text13">что делать?</span>
              </h1>
            </div>
            <AnchorLinksSection
              title="Основные причины отсутствия слива:"
              items={[
                { icon: '/external/vector8669-r6fr.svg', href: '#1', text: '1. Засор сливного фильтра' },
                { icon: '/external/vector8669-r6fr.svg', href: '#2', text: '2. Неисправность датчика уровня воды (прессо��тата)' },
                { icon: '/external/vector8669-r6fr.svg', href: '#2b', text: '3. Неисправность сливного насоса.' },
                { icon: '/external/vector8669-r6fr.svg', href: '#2c', text: '4. Сбой или поломка модуля управления' },
                { icon: '/external/vector8669-r6fr.svg', href: '#2d', text: '5. Засор сливного патрубка' },
                { icon: '/external/vector8669-r6fr.svg', href: '#2e', text: '6. Засор сливного щланга' },
                { icon: '/vector.svg', href: '#3', text: 'Как самостоятельно слить воду:' },
                { icon: '/vector.svg', href: '#4', text: 'Советы по профилактике:' },
              ]}
            />
            <section id="1" className="page-firstproblem">
              <div className="page-container12 zagolovkiskorobkoy">
                <h2 className="zagolovki2">
                  1. Засор сливного фильтра
                </h2>
                <svg
                  width="330"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 330 20"
                  preserveAspectRatio="none"
                  className="page-icon26"
                >
                  <path
                    d="M0 10 H330"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="11 11"
                  ></path>
                </svg>
              </div>
              <div className="page-container17">
                <figure className="page-container18">
                  <img
                    alt="засор сливного фильтра"
                    src="/1/filtr.webp"
                    loading="eager"
                    className="page-image38230522"
                  />
                  <span className="page-text19">
                    <span>Засор сливного фильтра</span>
                    <br></br>
                  </span>
                </figure>
                <p className="vicetext">
                  Сливной фильтр улавливает мелкие предметы и ворсинки, не давая им попасть в насос. Как правило, он находится в нижней части корпуса за откидной крышкой. Перед началом любых работ обязательно отключите машину от сети и подготовьте ёмкость ��ля слива. Аккуратно открутите крышку фильтра против часовой стрелки – под ней немедленно начнёт вытекать вода.( см. как правильно сливать воду ) Как только в баке останется мало воды, сработает защёлка запорного механизма, и дверца разблокируется. После этого полностью вытащите фильтр и очистите его от скопившейся пыли, волос, монеток и других посторонних предметов. Собирая обратно, будьте осторожны: пластмассовый фильтр хрупкий. Если засор в фильтре был причиной проблемы, после его очистки вода будет свободно уходить, а люк должен открыться.
                </p>
              </div>
            </section>
            <section id="2" className="page-thirdproblem1">
              <div className="page-container16 zagolovkiskorobkoy">
                <h3 className="zagolovki2">
                  2. Неисправность датчика уровня воды (прессостата)
                </h3>
                <svg
                  width="330"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 330 20"
                  preserveAspectRatio="none"
                  className="page-icon28"
                >
                  <path
                    d="M0 10 H330"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="11 11"
                  ></path>
                </svg>
              </div>
              <div className="page-container17">
                <figure className="page-container18">
                  <img
                    alt="прессостат"
                    src="/2/presso.webp"
                    loading="lazy"
                    className="page-image38230522"
                  />
                  <span className="page-text19">
                    <span>Неисправный прессостат</span>
                    <br></br>
                  </span>
                </figure>
                <p className="vicetext">
                  {' '}
                  Современные машины контролируют уровень воды с помощью прессостата – герметичной ёмкости с трубкой и датчиком давления. Если прессостат сломан или его шланг оторвался, машина может ошибочно считать бак пустым и не подавать команду на слив. Обычно в этом случае машина останавливается с кодами ошибок RE или OE. Проблему иногда решают проверкой и прочисткой трубки прессостата, в более сложных случаях – заменой датчика.
                </p>
              </div>
            </section>
            <section id="2b" className="page-thirdproblem1">
              <div className="page-container16 zagolovkiskorobkoy">
                <h3 className="zagolovki2">
                  3. Неисправность сливного насоса
                </h3>
                <svg
                  width="330"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 330 20"
                  preserveAspectRatio="none"
                  className="page-icon28"
                >
                  <path
                    d="M0 10 H330"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="11 11"
                  ></path>
                </svg>
              </div>
              <div className="page-container17">
                <figure className="page-container18">
                  <img
                    alt="помпа стиральной машины"
                    src="/1/slivanasos.webp"
                    loading="lazy"
                    className="page-image38230522"
                  />
                  <span className="page-text20">
                    <span>Сливной насос</span>
                    <br></br>
                  </span>
                </figure>
                <p className="vicetext">
                  {' '}
                  Помпа откачивает воду из бака в канализацию. Под крышкой фильтра в��дна крыльчатка насоса – маленький винт, который вращается при сливе. Проверьте, легко ли он проворачивается вручную. Если крыльчатка заклинила из-за застрявшего предмета, или мотор совсем не вращается, насос не справи��ся со сливом. Для проверки запустите короткий режим «Слив» или «Отжим» – при исправном насосе крыльчатка будет вращаться, и вы услышите её гул. Если помпа едва вращается или останавливается при небольшом нажатии (значит, износила ресурс), её нужно заменить. При поломке насоса вода не откачиваетс�� вообще, и дверца остаётся закрытой.
                </p>
              </div>
            </section>
            <section id="2c" className="page-thirdproblem1">
              <div className="page-container16 zagolovkiskorobkoy">
                <h3 className="zagolovki2">
                  4. Сбой или поломка модуля управления
                </h3>
                <svg
                  width="330"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 330 20"
                  preserveAspectRatio="none"
                  className="page-icon28"
                >
                  <path
                    d="M0 10 H330"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="11 11"
                  ></path>
                </svg>
              </div>
              <div className="page-container17">
                <figure className="page-container18">
                  <img
                    alt="модуль управления стиральной машиной"
                    src="/1/plata.webp"
                    loading="lazy"
                    className="page-image38230522"
                  />
                  <span className="page-text21">
                    <span>Модуль управления</span>
                    <br></br>
                  </span>
                </figure>
                <p className="vicetext">
                  {' '}
                  Электронная плата (модуль управления) посылает команды насосу при окончании цикла стирки. Если плата неисправна или «зависает», она может не запустить сливной насос и не разблокировать люк. При подозрении ��а сбой электроники нужна диагностика специалиста: плату обычно вынимают для тестирования. Возможные причины – перегоревшие микросхемы, сбой прошивки или окисление контактов. Это самая сложная поломка, которую сложно устранить самостоятельно.
                </p>
              </div>
            </section>
            <section id="2d" className="page-thirdproblem1">
              <div className="page-container16 zagolovkiskorobkoy">
                <h3 className="zagolovki2">
                  5. Засор сливного патрубка
                </h3>
                <svg
                  width="330"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 330 20"
                  preserveAspectRatio="none"
                  className="page-icon28"
                >
                  <path
                    d="M0 10 H330"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="11 11"
                  ></path>
                </svg>
              </div>
              <div className="page-container17">
                <figure className="page-container18">
                  <img
                    alt="патрубок"
                    src="/1/patrubok.webp"
                    loading="lazy"
                    className="page-image38230522"
                  />
                  <span className="page-text22">
                    <span>Сливной патрубок</span>
                    <br></br>
                  </span>
                </figure>
                <p className="vicetext">
                  {' '}
                  Сливной патрубок (гофра) соединяет бак с насосом. Даже после чистки фильтра вода может не уходить, если в этом патрубке что-то застряло. Чаще всего внутрь попадают монеты, пуговицы, обрывки ткани – они могут периодически перекрывать проток воды.Чтобы проверить патрубок, отключите машину, уложите е�� на бок и снимите заднюю или нижнюю п��нель. Далее отсоедините патрубок от насоса: внутри часто обнаруживаются мелкие тряпочки, носки и мелкие детали. Удалите из патрубка мусор. После сборки проверьте слив – при отсутствии засора вода должна свободно уходить.
                </p>
              </div>
            </section>
            <section id="2e" className="page-thirdproblem1">
              <div className="page-container16 zagolovkiskorobkoy">
                <h3 className="zagolovki2">
                  6. Засор сливного шланга
                </h3>
                <svg
                  width="330"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 330 20"
                  preserveAspectRatio="none"
                  className="page-icon28"
                >
                  <path
                    d="M0 10 H330"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="11 11"
                  ></path>
                </svg>
              </div>
              <div className="page-container17">
                <figure className="page-container18">
                  <img
                    alt="шланг"
                    src="/1/shlang.webp"
                    loading="lazy"
                    className="page-image38230522"
                  />
                  <span className="page-text23">
                    <span>Сливной шланг</span>
                    <br></br>
                  </span>
                </figure>
                <p className="vicetext">
                  {' '}
                  Гибкий сливной шланг идёт от насоса к стояку канализации. Важно убедиться, что он не пережат и не забит грязью или жиром, особенно в местах изгибов и подсоединения к раковине или сифону. Для проверки отсоедините шланг от канализации и попробуйте продуть его: при чистом шланге воздух проходит легко и слышно, как булькает оставшая��я вода. Если шланг забит, протолкните в��утрь гибкую проволоку или промойте его под струёй горячей воды. После прочистки установите шланг на место и убедитесь, что он нигде не перегибается и надёжно закреплён.
                </p>
              </div>
            </section>
            <section id="3" className="page-thirdproblem2">
              <div className="page-container19 zagolovkiskorobkoy">
                <h3 className="zagolovki2">7. Как самостоятельно слить воду?</h3>
                <svg
                  width="330"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 330 20"
                  preserveAspectRatio="none"
                  className="page-icon30"
                >
                  <path
                    d="M0 10 H330"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="11 11"
                  ></path>
                </svg>
              </div>
              <div className="page-container17">
                <figure className="page-container18">
                  <img
                    alt="блюдечко"
                    src="/1/bludechko.webp"
                    loading="lazy"
                    className="page-image38230522"
                  />
                  <span className="page-text19">
                    <span>Подготовка к аварийному сливу</span>
                    <br></br>
                  </span>
                </figure>
                <div className="vicetext">
                  <p><strong>1. Отключите питание.</strong><br />Выньте вилку из розетки — это обязательная мера безопасности.</p>
                  <p><strong>2. Подготовьте всё для сбора воды.</strong><br />Возьмите тряпки или старые полотенца и плоскую невысокую ёмкость (таз, миску или лоток). Если можно — отведите сливной шланг в душевую/ванну; иначе собирайте воду в ёмкость и переносите.</p>
                  <p><strong>3. Дайте воде остыть.</strong><br />Если стирка была недавно, дождитесь остывания. Оцените температуру по стеклу люка: если оно горячее — подождите.</p>
                  <p><strong>4. Откройте доступ к сливному фильтру.</strong><br />Он внизу спереди за крышкой. Подставьте плоскую ёмкость и аккуратно приоткрутите пробку для слива.</p>
                  <p><strong>5. Наклоните машинку немного назад.</strong><br />Так остатки быстрее стекают к фильтру. Делайте это вдвоём — техника тяжёлая.</p>
                  <p><strong>6. Очистите фильтр.</strong><br />Когда вода выйдет, выкрутите фильтр до конца, удалите мусор, промойте и установите обратно.</p>
                </div>
              </div>
            </section>
            <section id="4" className="page-fiveproblem1">
              <div className="page-container22 zagolovkiskorobkoy">
                <h3 className="zagolovki2">
                  8. Советы по профилактике
                </h3>
                <svg
                  width="330"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 330 20"
                  preserveAspectRatio="none"
                  className="page-icon32"
                >
                  <path
                    d="M0 10 H330"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="11 11"
                  ></path>
                </svg>
              </div>
              <div className="page-container17">
                <div className="vicetext">
                  <p><strong>1. Регулярно очищайте фильтр.</strong><br />Чистый фильтр предотвращает заторы из ворса и мелкого мусора.</p>
                  <p><strong>2. Не допускайте попадания мелких предметов.</strong><br />Проверяйте карманы одежды перед стиркой: монеты, закол��и, платки и т.п. могут попасть в патрубок.</p>
                  <p><strong>3. Следите за положением сливного шланга.</strong><br />Шланг не должен перегибаться или пережиматься. Оптимальная высота вывода — до 50 см от уровня пола. Ставьте машинку ровно и снижайте вибрации, чтобы не перетирались провода и не ослабевали патрубки.</p>
                  <p><strong>4. Проверяйте канализацию.</strong><br />Убедитесь, что стояк или сифон не засорены. Если из раковины вода уходит медленно, стирочная может застаиваться. Периодически очищайте сантехнику.</p>
                </div>
              </div>
            </section>
            <CallMasterSection onOrderClick={openModal} />
            <PageNavigation
              prevPage={{
                href: '/nekrutitbaraban',
                title: 'Стиральная машина не крутит барабан'
              }}
              nextPage={{
                href: '/negreetvodu',
                title: 'Стиральная машина не греет воду'
              }}
            />
            <svg
              width="330"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 330 20"
              preserveAspectRatio="none"
              className="page-icon58"
            >
              <path
                d="M0 10 H330"
                fill="none"
                stroke="#000000"
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="11 11"
              ></path>
            </svg>
            <RelatedArticles />
          </div>
          <div className="page-dops-info"><InterestingAside />
            <section className="page-frame1299" style={{display:"none"}}>
              <span className="page-text72">Вам будет интересно:</span>
              <div className="page-frame12981">
                <span className="page-text73">
                  Ошибки, которые приводят к дорогостоящему ремонту (и как их
                  избежать)
                </span>
                <div className="page-container45"></div>
              </div>
              <div className="page-frame12982">
                <span className="page-text74">
                  Как продлить жизнь машине на 3–5 лет — простые ��ривычки,
                  которые сэкономят деньги
                </span>
                <div className="page-container46"></div>
              </div>
              <div className="page-frame12983">
                <span className="page-text75">
                  Почему стиралка воняет — 7 быстрых причин и что сделать прямо
                  сейчас
                </span>
                <div className="page-container47"></div>
              </div>
              <div className="page-frame12984">
                <span className="page-text76">
                  Как секономить электричест��о и воду — реальные настройки и
                  лайфхаки
                </span>
                <div className="page-container48"></div>
              </div>
              <div className="page-frame12985">
                <span className="page-text77">
                  К���� безопа��но перевози��ь и хранить стиральную машину
                </span>
                <div className="page-container49"></div>
              </div>
              <div className="page-frame12986">
                <span className="page-text78">
                  Мифы о стиралках: что ��р��вда, а что — вымысел?
                </span>
                <div className="page-container50"></div>
              </div>
            </section>
          </div>
        </main>
        <MainFooter />
        <OrderModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <style jsx>
        {`
          .page-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            min-height: 100dvh;
            align-items: center;
            flex-direction: column;
            background-color: #ffffff;
          }
          .page-breadcrumbs-section {
            width: 100%;
            max-width: 1300px;
            padding: 0 var(--dl-layout-space-unit);
            margin: 0 auto;
          }
          .page-header {
            gap: 361px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 97px;
            display: flex;
            padding: 20px 61px;
            overflow: hidden;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
            background-color: rgba(31, 37, 42, 1);
          }
          .page-main {
            gap: var(--dl-layout-space-sixunits);
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: 1471px;
            min-height: 711px;
            align-items: flex-start;
            padding-top: 0;
            flex-direction: row;
            justify-content: center;
          }
          .page-left-main-box {
            gap: 0;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 846px;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }

          .page-left-main-box > *:not(:first-child) {
            margin-top: var(--dl-layout-space-oneandhalfunits);
          }

          .page-container11 {
            margin-top: 0px !important;
          }
          .page-headertextwashermachine {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            margin-bottom: 45px;
          }
          .page-image1 {
            width: 50px;
            height: 50px;
            display: none;
            object-fit: cover;
          }
          .page-text10 {
            color: rgb(80, 80, 80);
            width: 100%;
            height: auto;
            font-size: 35px;
            align-self: flex-start;
            text-align: left;
            font-family: 'Noto Serif SC';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
            margin: 0 0 8px 0;
          }
          .page-text11 {
            color: var(--dl-color-theme-neutral-dark);
            font-style: normal;
          }
          .page-text12 {
            font-style: normal;
          }
          .page-text13 {
            color: #45c5ed;
            font-weight: 500;
          }
          .page-container11 {
            gap: 5px;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            max-width: 586px;
            min-width: 290px;
            box-shadow: 0px 12px 28px 0px #d4d4d4;
            margin-top: 8px;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            margin-bottom: var(--dl-layout-space-unit);
            flex-direction: column;
            justify-content: flex-start;
            background-color: #fdfdf0;
          }
          .page-icon10 {
            top: -19px;
            right: -13px;
            width: 9px;
            height: auto;
            position: absolute;
          }
          .page-icon12 {
            right: -13px;
            width: 9px;
            bottom: -18px;
            height: auto;
            position: absolute;
          }
          .page-icon14 {
            left: -14px;
            width: 9px;
            bottom: -18px;
            height: auto;
            position: absolute;
          }
          .page-icon16 {
            top: -19px;
            left: -14px;
            width: 9px;
            height: auto;
            position: absolute;
          }
          .page-text14 {
            color: rgb(49, 49, 49);
            height: auto;
            flex-grow: 1;
            font-size: 15px;
            font-style: normal;
            text-align: left;
            font-family: var(--font-roboto);
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            padding-left: var(--dl-layout-space-unit);
            text-transform: none;
          }
          .page-ul {
            gap: 12px;
            width: 100%;
            height: 100%;
            margin: 0px;
            display: flex;
            padding-top: 12px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
          }
          .page-li1 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 12px;
          }
          .page-vector1 {
            width: 12px;
            height: 11px;
          }
          .page-link1 {
            fill: #2f2f2f;
            color: rgb(68, 68, 68);
            text-decoration: none;
          }
          .page-li2 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .page-image2 {
            width: 13px;
            height: 13px;
            object-fit: cover;
          }
          .page-link2 {
            fill: rgb(69, 197, 237);
            color: rgb(69, 197, 237);
            font-size: 15px;
            font-style: normal;
            font-family: var(--font-roboto);
            font-weight: 400;
            padding-left: 0px;
            letter-spacing: 0.5px;
            text-decoration: none;
          }
          .page-li3 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 12px;
          }
          .page-vector2 {
            width: 11px;
            height: 11px;
          }
          .page-link3 {
            fill: #444444;
            color: rgb(68, 68, 68);
            text-decoration: none;
          }
          .page-li4 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 12px;
          }
          .page-vector3 {
            width: 11px;
            height: 11px;
          }
          .page-link4 {
            fill: #444444;
            color: rgb(68, 68, 68);
            text-decoration: none;
          }
          .page-li5 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 12px;
            flex-direction: row;
          }
          .page-vector4 {
            width: 11px;
            height: 11px;
          }
          .page-link5 {
            fill: #54c9ee;
            color: rgb(68, 68, 68);
            font-style: normal;
            text-decoration: none;
          }
          .page-li6 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 12px;
          }
          .page-vector5 {
            width: 11px;
            height: 11px;
          }
          .page-link6 {
            fill: #54c9ee;
            color: rgb(68, 68, 68);
            font-style: normal;
            text-decoration: none;
          }
          .page-icon18 {
            top: -12px;
            left: -1px;
            width: 100%;
            height: 5px;
            position: absolute;
          }
          .page-icon20 {
            left: -2px;
            width: 100%;
            bottom: -12px;
            height: 5px;
            position: absolute;
          }
          .page-icon22 {
            top: -2px;
            right: -11px;
            width: 5px;
            height: 100%;
            position: absolute;
          }
          .page-icon24 {
            left: -12px;
            width: 5px;
            bottom: -3px;
            height: 100%;
            position: absolute;
          }
          .page-firstproblem {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-container12 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-icon26 {
            width: 100%;
            height: 5px;
          }
          .page-container13 {
            width: 100%;
            height: 100%;
            display: flow-root;
            max-width: 900px;
            min-width: 100%;
          }
          .page-container14 {
            gap: 5px;
            float: right;
            width: 279px;
            height: auto;
            display: flex;
            max-width: 220px;
            min-width: auto;
            max-height: 200px;
            min-height: auto;
            align-items: center;
            margin-left: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(69, 197, 237, 0.1);
          }
          .page-image38230521 {
            float: right;
            width: 100%;
            height: 100%;
            max-width: 100%;
            min-width: 100%;
            max-height: 100%;
            min-height: 100%;
          }
          .page-text18,
          .page-text19,
          .page-text20,
          .page-text21,
          .page-text22,
          .page-text23 {
            width: 100%;
            height: 100%;
            display: block;
            font-size: 15px;
            max-width: 100%;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: var(--font-roboto);
            font-weight: 400;
            margin-bottom: var(--dl-layout-space-halfunit);
            padding: 5px;
          }
          @media (max-width: 768px) {
            .page-container13,
            .page-container17,
            .page-container20,
            .page-container23 {
              display: block;
            }

            .page-container14,
            .page-container18,
            .page-container21,
            .page-container24 {
              float: none !important;
              width: 100% !important;
              max-width: 300px !important;
              margin: 0 auto 20px auto !important;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .page-image38230521,
            .page-image38230522,
            .page-image38230523,
            .page-image38230524 {
              float: none !important;
            }
          }
          .page-container15 {
            width: 400px;
            height: 70px;
            display: flex;
            align-self: flex-start;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #58c3e8;
          }
          .page-text34 {
            color: rgb(255, 255, 255);
            height: auto;
            font-size: 22px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Spectral';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-thirdproblem1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-container16 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-icon28 {
            width: 100%;
            height: 5px;
          }
          .page-container17 {
            width: 100%;
            display: flow-root;
          }
          .page-container18 {
            gap: 5px;
            float: right;
            width: 279px;
            height: auto;
            display: flex;
            max-width: 220px;
            min-width: auto;
            max-height: 200px;
            min-height: auto;
            align-items: center;
            margin-left: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(69, 197, 237, 0.1);
          }
          .page-image38230522 {
            float: right;
            width: 100%;
            height: 100%;
            max-width: 100%;
            min-width: 100%;
            max-height: 100%;
            min-height: 100%;
          }
          .page-thirdproblem2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-container19 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-icon30 {
            width: 100%;
            height: 5px;
          }
          .page-container20 {
            width: 100%;
            display: flow-root;
          }
          .page-container21 {
            gap: 5px;
            float: right;
            width: 279px;
            height: auto;
            display: flex;
            max-width: 220px;
            min-width: auto;
            max-height: 200px;
            min-height: auto;
            align-items: center;
            margin-left: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(69, 197, 237, 0.1);
          }
          .page-image38230523 {
            float: right;
            width: 100%;
            height: 100%;
            max-width: 100%;
            min-width: 100%;
            max-height: 100%;
            min-height: 100%;
          }
          .page-text40 {
            width: 100%;
            height: 100%;
            display: block;
            font-size: 15px;
            max-width: 100%;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: var(--font-roboto);
            font-weight: 400;
            margin-bottom: var(--dl-layout-space-halfunit);
            padding: 5px;
          }
          .page-fiveproblem1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-container22 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-icon32 {
            width: 100%;
            height: 5px;
          }
          .page-container23 {
            width: 100%;
            display: flow-root;
          }
          .page-container24 {
            gap: 5px;
            float: right;
            width: 279px;
            height: auto;
            display: flex;
            max-width: 220px;
            min-width: auto;
            max-height: 200px;
            min-height: auto;
            align-items: center;
            margin-left: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(69, 197, 237, 0.1);
          }
          .page-image38230524 {
            float: right;
            width: 100%;
            height: 100%;
            max-width: 100%;
            min-width: 100%;
            max-height: 240px;
            min-height: 150px;
          }
          .page-text45 {
            width: 100%;
            height: 100%;
            display: block;
            font-size: 15px;
            max-width: 100%;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: var(--font-roboto);
            font-weight: 400;
            margin-bottom: var(--dl-layout-space-halfunit);
            padding: 5px;
          }
          .page-text46 {
            color: rgb(40, 40, 40);
            width: 100%;
            height: auto;
            align-self: stretch;
            text-align: left;
            font-stretch: normal;
          }
          .page-fiveproblem2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-container25 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-icon34 {
            width: 100%;
            height: 5px;
          }
          .page-container26 {
            width: 100%;
            display: flow-root;
          }
          .page-container27 {
            gap: 5px;
            float: right;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 250px;
            min-width: auto;
            max-height: 200px;
            min-height: 100%;
            align-items: center;
            margin-left: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(69, 197, 237, 0.1);
          }
          .page-image38230525 {
            float: right;
            width: 100%;
            height: 100%;
            max-width: 100%;
            min-width: 100%;
            max-height: 240px;
            min-height: 150px;
          }
          .page-text48 {
            width: 100%;
            height: 100%;
            display: block;
            font-size: 15px;
            max-width: 250px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: var(--font-roboto);
            font-weight: 400;
            margin-bottom: var(--dl-layout-space-halfunit);
          }
          .page-text49 {
            color: rgb(40, 40, 40);
            width: 100%;
            height: auto;
            align-self: stretch;
            text-align: left;
            font-stretch: normal;
          }
          .page-better-call-master {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            max-width: 100%;
            box-shadow: 0px 12px 28px 0px #d4d4d4;
            margin-top: var(--dl-layout-space-oneandhalfunits);
            min-height: 330px;
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: var(--dl-layout-radius-imageradius);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: center;
            background-color: #fdfdf0;
          }
          .page-icon36 {
            top: -21px;
            right: -14px;
            width: 11px;
            height: auto;
            position: absolute;
          }
          .page-icon38 {
            right: -15px;
            width: 11px;
            bottom: -20px;
            height: auto;
            position: absolute;
          }
          .page-icon40 {
            left: -15px;
            width: 11px;
            bottom: -20px;
            height: auto;
            position: absolute;
          }
          .page-icon42 {
            top: -21px;
            left: -14px;
            width: 11px;
            height: auto;
            position: absolute;
          }
          .page-icon44 {
            top: -12px;
            left: -1px;
            width: 100%;
            height: 5px;
            position: absolute;
          }
          .page-icon46 {
            left: -2px;
            width: 100%;
            bottom: -12px;
            height: 5px;
            position: absolute;
          }
          .page-icon48 {
            top: 0px;
            right: -12px;
            width: 5px;
            height: 100%;
            position: absolute;
          }
          .page-icon50 {
            left: -12px;
            width: 5px;
            bottom: -3px;
            height: 100%;
            position: absolute;
          }
          .page-text50 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            width: auto;
            height: auto;
            font-size: 20px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: 'Noto Serif SC';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-text51 {
            color: rgba(39, 38, 38, 0.99);
            width: 100%;
            height: auto;
            font-size: 16px;
            max-width: 100%;
            text-align: left;
            font-family: var(--font-nunito);
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-text52 {
            font-style: normal;
          }
          .page-text53 {
            color: #58c3e8;
            font-weight: 500;
          }
          .page-text54 {
            color: #58c3e8;
            font-weight: 500;
          }
          .page-text55 {
            color: #58c3e8;
            font-weight: 500;
          }
          .page-text56 {
            font-weight: 500;
          }
          .page-text57 {
            font-style: normal;
          }
          .page-icon52 {
            width: 100%;
            height: 5px;
            max-width: 600px;
          }
          .page-text58 {
            fill: #58c3e8;
            color: #58c3e8;
            width: auto;
            height: 100%;
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-family: 'Noto Serif SC';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: underline;
          }
          .page-container28 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .page-container29 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            max-width: 250px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-container30 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .page-image3 {
            width: 29px;
            height: 29px;
            object-fit: cover;
          }
          .page-text59 {
            color: rgb(40, 40, 40);
            width: 100%;
            height: 100%;
            font-size: 19px;
            font-style: normal;
            text-align: left;
            font-family: 'Noto Serif SC';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-container31 {
            gap: var(--dl-layout-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .page-image4 {
            width: 29px;
            height: 28px;
            object-fit: cover;
          }
          .page-text60 {
            color: rgb(40, 40, 40);
            width: 100%;
            height: auto;
            font-size: 19px;
            font-style: normal;
            text-align: left;
            font-family: 'Noto Serif SC';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-button {
            fill: var(--dl-color-theme-secondary1);
            color: rgb(250, 248, 246);
            width: 279px;
            height: 52px;
            font-size: 15px;
            font-family: 'Spectral';
            border-radius: 8px;
            background-color: rgb(40, 40, 40);
          }
          .page-container32 {
            gap: var(--dl-layout-space-sixunits);
            width: 100%;
            height: 100%;
            display: flex;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
            padding-left: var(--dl-layout-space-twounits);
            margin-bottom: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: row;
            justify-content: center;
          }
          .page-container33 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 300px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            padding-top: 11px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
          }
          .page-container34 {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-layout-radius-round);
            justify-content: center;
            background-color: #373737;
          }
          .page-icon54 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #58c3e8;
            width: 20px;
            height: 20px;
            max-width: auto;
          }
          .page-container35 {
            gap: var(--dl-layout-space-halfunit);
            width: 191px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-text61 {
            color: rgba(55, 55, 55, 1);
            width: 100%;
            height: auto;
            font-size: 17px;
            max-width: 100%;
            align-self: flex-end;
            font-style: normal;
            text-align: left;
            font-family: 'Noto Serif SC';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-text62 {
            fill: #58c3e8;
            color: #58c3e8;
            width: 100%;
            height: auto;
            font-size: 16px;
            text-align: left;
            font-family: 'Noto Serif SC';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            letter-spacing: 0.5;
            text-transform: none;
            text-decoration: none;
          }
          .page-container36 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 300px;
            align-items: center;
            padding-top: 11px;
            border-radius: var(--dl-layout-radius-imageradius);
            flex-direction: row-reverse;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
          }
          .page-container37 {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            justify-content: center;
            background-color: #373737;
          }
          .page-icon56 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #58c3e8;
            width: 20px;
            height: 20px;
            max-width: auto;
            align-self: center;
          }
          .page-container38 {
            gap: var(--dl-layout-space-halfunit);
            width: 191px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-text63 {
            color: rgba(55, 55, 55, 1);
            width: 100%;
            height: auto;
            font-size: 17px;
            max-width: 100%;
            align-self: flex-end;
            font-style: normal;
            text-align: left;
            font-family: 'Noto Serif SC';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-text64 {
            fill: #58c3e8;
            color: rgb(88, 195, 232);
            width: 100%;
            height: auto;
            font-size: 16px;
            text-align: left;
            font-family: 'Noto Serif SC';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            letter-spacing: 0.5px;
            text-transform: none;
            text-decoration: none;
          }
          .page-icon58 {
            width: 100%;
            height: 5px;
            max-width: 100%;
          }
          .page-container39 {
            width: 277px;
            height: 54px;
            display: flex;
            align-self: center;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #58c3e8;
          }
          .page-text65 {
            color: rgb(255, 255, 255);
            height: auto;
            font-size: 22px;
            align-self: center;
            font-style: italic;
            text-align: left;
            font-family: 'Spectral';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-container40 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: center;
            background-color: #rgba(131, 213, 242, 0.23);
          }
          .page-container41 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: 120px;
            display: flex;
            max-width: 350px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            min-height: 120px;
            align-items: center;
            padding-top: 11px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-imageradius);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .page-image38230321 {
            width: 110px;
            height: 100px;
          }
          .page-text68 {
            fill: #58c3e8;
            color: rgb(55, 55, 55);
            width: 100%;
            height: auto;
            font-size: 15px;
            font-style: normal;
            text-align: left;
            font-family: var(--font-nunito);
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-transform: none;
            text-decoration: none;
          }
          .page-container42 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 350px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            max-height: 120px;
            min-height: 120px;
            align-items: center;
            padding-top: 11px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-imageradius);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .page-image38230322 {
            width: 110px;
            height: 100px;
          }
          .page-text69 {
            fill: #58c3e8;
            color: rgb(55, 55, 55);
            width: 100%;
            height: auto;
            font-size: 15px;
            font-style: normal;
            text-align: left;
            font-family: var(--font-nunito);
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-transform: none;
            text-decoration: none;
          }
          .page-container43 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 350px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            max-height: 120px;
            min-height: 120px;
            align-items: center;
            padding-top: 11px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-imageradius);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .page-image38230323 {
            width: 110px;
            height: 100px;
          }
          .page-text70 {
            fill: #58c3e8;
            color: rgb(55, 55, 55);
            width: 100%;
            height: auto;
            font-size: 15px;
            font-style: normal;
            text-align: left;
            font-family: var(--font-nunito);
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-transform: none;
            text-decoration: none;
          }
          .page-container44 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 350px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            max-height: 120px;
            min-height: 120px;
            align-items: center;
            padding-top: 11px;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: var(--dl-layout-radius-imageradius);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .page-image38230324 {
            width: 110px;
            height: 100px;
          }
          .page-text71 {
            fill: #58c3e8;
            color: rgb(55, 55, 55);
            width: 100%;
            height: auto;
            font-size: 15px;
            font-style: normal;
            text-align: left;
            font-family: var(--font-nunito);
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-transform: none;
            text-decoration: none;
          }
          .page-dops-info {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 417px;
            align-items: flex-start;
            flex-direction: column;
          }
          .page-frame1299 {
            gap: 24px;
            width: 100%;
            height: auto;
            display: flex;
            padding: 31px 34px;
            position: sticky;
            align-self: center;
            box-shadow: 5px 5px 4px 0px #d4d4d4;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            background-color: #faf8f6;
          }
          .page-text72 {
            color: rgb(0, 0, 0);
            height: auto;
            font-size: 17px;
            align-self: stretch;
            font-style: Medium;
            text-align: left;
            font-family: 'Noto Serif SC';
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-frame12981 {
            gap: 21px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: row-reverse;
          }
          .page-text73 {
            color: rgb(41, 41, 41);
            height: auto;
            flex-grow: 1;
            font-size: 15px;
            font-style: Regular;
            text-align: left;
            font-family: var(--font-nunito);
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-container45 {
            flex: 0 0 auto;
            width: 118px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 80px;
            display: flex;
            align-items: flex-start;
            background-size: cover;
            background-image: url('/100x100/image%203823137-200h.webp');
          }
          .page-frame12982 {
            gap: 21px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: row-reverse;
          }
          .page-text74 {
            color: rgb(41, 41, 41);
            height: auto;
            flex-grow: 1;
            font-size: 15px;
            font-style: Regular;
            text-align: left;
            font-family: var(--font-nunito);
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-container46 {
            flex: 0 0 auto;
            width: 118px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 80px;
            display: flex;
            align-items: flex-start;
            background-size: cover;
            background-image: url('/100x100/image%203823133-200h.webp');
          }
          .page-frame12983 {
            gap: 21px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: row-reverse;
          }
          .page-text75 {
            color: rgb(41, 41, 41);
            height: auto;
            flex-grow: 1;
            font-size: 15px;
            font-style: Regular;
            text-align: left;
            font-family: var(--font-nunito);
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-container47 {
            flex: 0 0 auto;
            width: 118px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 80px;
            display: flex;
            align-items: flex-start;
            background-size: cover;
            background-image: url('/100x100/image%203823132-200h.webp');
          }
          .page-frame12984 {
            gap: 21px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: row-reverse;
          }
          .page-text76 {
            color: rgb(41, 41, 41);
            height: auto;
            flex-grow: 1;
            font-size: 15px;
            font-style: Regular;
            text-align: left;
            font-family: var(--font-nunito);
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-container48 {
            flex: 0 0 auto;
            width: 118px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 80px;
            display: flex;
            align-items: flex-start;
            background-size: cover;
            background-image: url('/100x100/image%203823134-200h.webp');
          }
          .page-frame12985 {
            gap: 21px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: row-reverse;
          }
          .page-text77 {
            color: rgb(41, 41, 41);
            height: auto;
            flex-grow: 1;
            font-size: 15px;
            font-style: Regular;
            text-align: left;
            font-family: var(--font-nunito);
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-container49 {
            flex: 0 0 auto;
            width: 118px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 80px;
            display: flex;
            align-items: flex-start;
            background-size: cover;
            background-image: url('/100x100/image%203823136-200w.webp');
          }
          .page-frame12986 {
            gap: 21px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: row-reverse;
          }
          .page-text78 {
            color: rgb(41, 41, 41);
            height: auto;
            flex-grow: 1;
            font-size: 15px;
            font-style: Regular;
            text-align: left;
            font-family: var(--font-nunito);
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page-container50 {
            flex: 0 0 auto;
            width: 118px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 80px;
            display: flex;
            align-items: flex-start;
            background-size: cover;
            background-image: url('/100x100/image%203823142-200h.webp');
          }
          @media (max-width: 991px) {
            .page-left-main-box {
              align-items: center;
              justify-content: center;
            }
            .page-container14 {
              min-width: 45px;
            }
            .page-container15 {
              align-self: center;
            }
            .page-container18 {
              min-width: 45px;
            }
            .page-container21 {
              min-width: 45px;
            }
            .page-container24 {
              min-width: 45px;
            }
            .page-container27 {
              min-width: 45px;
            }
            .page-container35 {
              gap: var(--dl-layout-space-unit);
            }
            .page-container38 {
              gap: var(--dl-layout-space-unit);
            }
            .page-icon58 {
              max-width: 500px;
            }
            .page-text69 {
              width: auto;
            }
            .page-text70 {
              width: auto;
            }
            .page-text71 {
              width: auto;
            }
            .page-frame1299 {
              display: none;
            }
            .page-dops-info {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .page-breadcrumbs-section {
              padding: 0 var(--dl-layout-space-oneandhalfunits);
            }
            .page-left-main-box {
              align-items: center;
            }
            .page-text10 {
              text-align: center;
            }
            .page-container11 {
              max-width: 350px;
            }
            .page-link2 {
              font-size: 14px;
            }
            .page-link3 {
              font-size: 14px;
            }
            .page-link4 {
              font-size: 14px;
            }
            .page-container13 {
              min-width: 100%;
            }
            .page-better-call-master {
              max-width: 400px;
            }
            .page-container32 {
              gap: var(--dl-layout-space-twounits);
              flex-wrap: wrap;
              align-self: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .page-breadcrumbs-section {
              padding: 0 var(--dl-layout-space-unit);
            }
            .page-header {
              height: 84px;
            }
            .page-left-main-box {
              width: 100%;
              align-self: flex-start;
              align-items: center;
              justify-content: center;
            }
            .page-headertextwashermachine {
              position: relative;
            }
            .page-image1 {
              top: -149px;
              left: 0px;
              right: 0px;
              width: 140px;
              height: 140px;
              margin: auto;
              display: flex;
              position: absolute;
              align-items: center;
              justify-content: center;
            }
            .page-text10 {
              fill: #373333;
              color: rgb(55, 51, 51);
              font-size: 24px;
              font-style: normal;
              text-align: center;
              font-family: Noto Serif SC;
              font-weight: 400;
              line-height: normal;
              text-decoration: none;
            }
            .page-container11 {
              width: auto;
              max-width: 305px;
              min-width: 290px;
            }
            .page-icon10 {
              top: -21px;
              right: -11px;
            }
            .page-icon12 {
              right: -12px;
              bottom: -20px;
            }
            .page-icon14 {
              left: -13px;
              bottom: -20px;
            }
            .page-icon16 {
              top: -21px;
              left: -12px;
            }
            .page-text14 {
              font-size: 14px;
            }
            .page-ul {
              padding-left: 19px;
            }
            .page-icon22 {
              top: -3px;
              right: -9px;
            }
            .page-icon24 {
              top: 0px;
              left: -10px;
            }
            .page-container13 {
              width: auto;
              min-width: 100%;
            }
            .page-container14 {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
              height: 100%;
              max-width: 100%;
              min-width: 100%;
              min-height: 100%;
              margin-bottom: 14px;
            }
            .page-image38230521 {
              width: auto;
              max-width: auto;
              min-width: auto;
              min-height: 50px;
            }
            .page-text18 {
              width: 100%;
            }
            .page-container15 {
              width: 100%;
            }
            .page-text34 {
              width: 100%;
              font-size: 18px;
              text-align: center;
            }
            .page-container18 { gap: var(--dl-layout-space-halfunit); width: 280px; max-width: 280px; min-width: 280px; height: auto; min-height: 0; margin: 12px auto 16px; float: none; }
            .page-image38230522 { width: 100%; height: 170px; object-fit: cover; min-width: 0; min-height: 0; }
            .page-container21 { gap: var(--dl-layout-space-halfunit); width: 280px; max-width: 280px; min-width: 280px; height: auto; min-height: 0; margin: 12px auto 16px; float: none; }
            .page-image38230523 { width: 100%; height: 170px; object-fit: cover; min-width: 0; min-height: 0; }
            .page-text40 {
              font-size: 13px;
            }
            .page-container24 { gap: var(--dl-layout-space-halfunit); width: 280px; max-width: 280px; min-width: 280px; height: auto; min-height: 0; margin: 12px auto 16px; float: none; }
            .page-image38230524 { width: 100%; height: 170px; object-fit: cover; min-width: 0; min-height: 0; }
            .page-text45 {
              font-size: 13px;
              font-style: normal;
              font-family: var(--font-roboto);
              font-weight: 400;
            }
            .page-container27 { gap: var(--dl-layout-space-halfunit); width: 280px; max-width: 280px; min-width: 280px; height: auto; min-height: 0; margin: 12px auto 16px; float: none; }
            .page-image38230525 { width: 100%; height: 170px; object-fit: cover; min-width: 0; min-height: 0; }
            .page-text48 {
              font-size: 13px;
              font-style: normal;
              font-family: var(--font-roboto);
              font-weight: 400;
            }
            .page-better-call-master {
              max-width: 290px;
              padding-left: 15px;
              padding-right: 15px;
            }
            .page-text50 {
              color: rgb(49, 49, 49);
              font-size: 19px;
              font-family: Noto Serif SC;
              font-weight: 500;
              line-height: normal;
              text-decoration: none;
            }
            .page-text51 {
              font-size: 15px;
              font-family: Noto Serif SC;
            }
            .page-text58 {
              font-style: normal;
              text-align: center;
              font-weight: 500;
            }
            .page-container28 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              height: 100%;
            }
            .page-container29 {
              align-items: center;
              justify-content: center;
            }
            .page-text59 {
              font-style: normal;
              text-align: left;
              font-weight: 500;
            }
            .page-text60 {
              font-style: normal;
              text-align: left;
              font-weight: 500;
            }
            .page-button {
              color: #ffffff;
              width: 100%;
              font-size: 15px;
              font-family: Noto Serif SC;
              border-color: #ffffff;
              background-color: rgb(40, 40, 40);
            }
            .page-container32 {
              gap: var(--dl-layout-space-twounits);
              align-items: center;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              justify-content: center;
            }
            .page-icon54 {
              width: 17px;
              height: 17px;
            }
            .page-container35 {
              gap: var(--dl-layout-space-halfunit);
            }
            .page-text61 {
              font-size: 16px;
            }
            .page-icon56 {
              width: 17px;
              height: 17px;
            }
            .page-container38 {
              gap: var(--dl-layout-space-halfunit);
            }
            .page-text63 {
              color: rgb(55, 55, 55);
              font-size: 16px;
              font-style: normal;
              font-family: Noto Serif SC;
              font-weight: 500;
              line-height: normal;
              text-decoration: none;
            }
            .page-text68 {
              font-size: 14px;
            }
            .page-text69 {
              font-size: 14px;
            }
            .page-text70 {
              font-size: 14px;
            }
            .page-text71 {
              font-size: 14px;
            }

          }
        `}
      </style>
    </>
  )
}

export default Page
