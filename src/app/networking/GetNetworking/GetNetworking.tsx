'use client'
import React from 'react'
import style from './GetNetworking.module.css'
import Image from 'next/image'
import {
  RedIcon,
  GetIcon1,
  GetIcon2,
  GetIcon3,
  Prize,
} from '@/assets/Images/NetworkingPage/Get'

const cardData = [
  {
    icon: GetIcon1,
    title: 'Спільнота підприємців',
    subtitle:
      'Приєднуючись до нашої спільноти, ви стаєте частиною активного e-commerce середовища, де можна:',
    points: [
      'Обмінюватися досвідом та ідеями з іншими підприємцями',
      'Знаходити рішення для актуальних викликів бізнесу',
      'Отримувати поради від власників успішних онлайн-магазинів',
      'Долучатися до закритих обговорень у Facebook та Telegram-групах',
    ],
    showExtra: true,
  },
  {
    icon: GetIcon2,
    title: 'Події та зустрічі',
    subtitle:
      'Ми регулярно організовуємо заходи, які допоможуть вам розширити мережу корисних знайомств та отримати нові знання.',
    points: [
      'Бізнес-форуми та конференції – дізнавайтеся про останні тренди e-commerce, беріть участь у панельних дискусіях і спілкуйтеся з провідними експертами.',
      'Тематичні мітапи – живі зустрічі, де учасники обговорюють актуальні теми, діляться своїм досвідом і знаходять партнерів.',
      'Закриті нетворкінг-вечори – події для власників бізнесу, де можна в невимушеній атмосфері знайти нові можливості для співпраці.',
    ],
    showExtra: false,
  },
  {
    icon: GetIcon3,
    title: 'Можливості для співпраці',
    subtitle:
      'Нетворкінг – це не просто знайомства, а можливість знайти людей, які допоможуть вам розвивати бізнес:',
    points: [
      'Пошук партнерів – знайдіть компанії для спільних акцій, обміну аудиторією або розширення ринків.',
      'Залучення інвесторів – отримайте можливість презентувати свою бізнес-ідею та знайти фінансування для масштабування.',
      'Розвиток спільних проєктів – об’єднуйте зусилля з іншими підприємцями для створення інноваційних рішень у сфері e-commerce.',
    ],
    showExtra: false,
  },
]

const GetNetworking = () => {
  return (
    <div className={style.mission_about_block}>
      <div className="customContainer">
        <div className={style.wrap_top}>
          <h2 className={style.wrap_top__title}>
            Що
            <span> ви отримаєте</span>
          </h2>
          <div className={style.wrap_top__back}>ви отримаєте</div>
          <div>
            <p className={style.mission_subtile}>
              <span className={style.mission_subtile_span}></span>
              Ми створили платформу для власників інтернет-магазинів, де кожен
              може знайти корисні контакти, отримати підтримку від колег і
              знайти партнерів для розвитку бізнесу.
            </p>
          </div>
        </div>

        <div className={style.mission_cards_content}>
          {cardData.map((card, index) => (
            <div key={index} className={style.netw_card}>
              <div>
                <div className={style.netw_card_top}>
                  <Image
                    className={style.netw_card_icon}
                    src={card.icon}
                    alt={`GetIcon${index + 1}`}
                  />
                  <p className={style.netw_card_title}>{card.title}</p>
                </div>
                <p className={style.netw_card_subtitle}>{card.subtitle}</p>
              </div>

              <div className={style.netw_card_middle}>
                {card.points.map((point, idx) => {
                  const [highlight, ...rest] = point.split('–')
                  const hasDash = rest.length > 0

                  return (
                    <div key={idx} className={style.netw_card_done_block}>
                      <Image
                        className={style.red_icon}
                        src={RedIcon}
                        alt="RedIcon"
                      />
                      <p className={style.netw_card_done_text}>
                        {hasDash && index !== 0 ? (
                          <>
                            <span className={style.netw_card_highlight}>
                              {highlight.trim()} –
                            </span>{' '}
                            {rest.join('–').trim()}
                          </>
                        ) : (
                          point
                        )}
                      </p>
                    </div>
                  )
                })}
              </div>

              {card.showExtra && (
                <div className={style.mission_card}>
                  <p className={style.mission_card_icon}>*</p>
                  <p className={style.mission_card_text}>
                    Ексклюзивний доступ до матеріалів, кейсів і практичних
                    рекомендацій від експертів.
                  </p>
                  <Image className={style.prize_img} src={Prize} alt="Prize" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GetNetworking
