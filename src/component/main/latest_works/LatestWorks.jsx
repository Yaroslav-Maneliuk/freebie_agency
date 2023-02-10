import React from 'react'
import s from "./LatestWorks.module.css"
import lwork_1 from "../../../assets/images/lwork_1.png"
import lwork_2 from "../../../assets/images/lwork_2.png"
import lwork_3 from "../../../assets/images/lwork_3.png"
import lwork_4 from "../../../assets/images/lwork_4.png"

const LatestWorks = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.latest_works_module}>
        <h2 className={s.latest_works_module_title}>
          latest works
        </h2>
        <nav className={s.nav_bar__list}>
          <ul className={s.nav_bar_item_wrapper}>
            <li><a className={s.nav_bar__item} href="#all">all</a></li>
            <li><a className={s.nav_bar__item} href="#web_design">web design</a></li>
            <li><a className={s.nav_bar__item} href="#branding">branding</a></li>
            <li><a className={s.nav_bar__item} href="#photography">photography</a></li>
            <li><a className={s.nav_bar__item} href="#illustration">illustration</a></li>
          </ul>
        </nav>

        <div className={s.latest_works_block_1_wrapper}>
          <div className={s.latest_works_block_1}>
            <h3 className={s.block_title}>a kitten's life</h3>
            <img src={lwork_1} alt="lwork1" className={s.block_img} />
            <h4 className={s.block_subtitle}>photography</h4>
            <p className={s.block_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className={s.latest_works_block_2_wrapper}>
          <div className={s.latest_works_block_1}>
            <h3 className={s.block_title_2}>apple's lost magic</h3>
            <img src={lwork_2} alt="lwork2" className={s.block_img} />
            <h4 className={s.block_subtitle}>photography</h4>
            <p className={s.block_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className={s.latest_works_block_3_wrapper}>
          <div className={s.latest_works_block_1}>
            <h3 className={s.block_title_3}>100 years photography</h3>
            <img src={lwork_3} alt="lwork3" className={s.block_img} />
            <h4 className={s.block_subtitle}>photography</h4>
            <p className={s.block_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className={s.latest_works_block_4_wrapper}>
          <div className={s.latest_works_block_1}>
            <h3 className={s.block_title_4}>grovemade products for mac</h3>
            <img src={lwork_4} alt="lwork4" className={s.block_img} />
            <h4 className={s.block_subtitle}>photography</h4>
            <p className={s.block_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default LatestWorks