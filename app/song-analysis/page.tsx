"use client";

export default function SongAnalysisPage() {
  const accents = [
    { time: "00:00", type: "Вступление", text: "Начало композиции. Слушаем пространство и первое появление ритма.", mark: "INTRO" },
    { time: "00:08", type: "Перкуссия", text: "Лёгкий ритмический акцент, который легко пропустить.", mark: "🥁" },
    { time: "00:16", type: "Бонго", text: "Характерный рисунок бонго выходит вперёд.", mark: "🪘" },
    { time: "00:24", type: "Глубокий акцент", text: "Низкий акцент в музыке. Хороший момент, чтобы почувствовать смену энергии.", mark: "✦" },
    { time: "00:32", type: "Вокал", text: "Фраза вокала создаёт новый импульс.", mark: "🎤" },
    { time: "00:41", type: "Тихая деталь", text: "Небольшой фоновый звук — его слышно только при внимательном прослушивании.", mark: "◦" },
    { time: "00:49", type: "Пауза", text: "Короткое освобождение пространства перед следующим музыкальным движением.", mark: "Ⅱ" },
    { time: "00:57", type: "Акцент", text: "Яркий акцент в конце музыкальной фразы.", mark: "★" },
  ];

  return (
    <main className="song-page">
      <style jsx>{`
        .song-page {
          --pink: #d45f88;
          --cream: #f4eee5;
          --paper: #fbf8f3;
          --black: #171717;
          min-height: 100vh;
          background: var(--cream);
          color: var(--black);
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
        }
        * { box-sizing: border-box; }

        .header {
          height: 92px;
          padding: 0 5vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(23,23,23,.16);
          background: var(--cream);
        }
        .logo {
          text-decoration: none;
          color: var(--black);
          line-height: .85;
          display: flex;
          flex-direction: column;
        }
        .logo strong {
          font-size: 28px;
          letter-spacing: -1.8px;
          font-weight: 900;
        }
        .logo strong span { color: var(--pink); }
        .logo small {
          margin-top: 9px;
          font-size: 8px;
          letter-spacing: 2px;
          font-weight: 700;
        }
        .nav {
          display: flex;
          gap: 27px;
          align-items: center;
        }
        .nav a {
          color: var(--black);
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
        }
        .nav a:hover { color: var(--pink); }
        .signup {
          text-decoration: none;
          color: white;
          background: var(--pink);
          padding: 15px 20px;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .hero {
          min-height: 500px;
          padding: 76px 7vw 82px;
          position: relative;
          display: grid;
          grid-template-columns: 1.25fr .75fr;
          gap: 60px;
          align-items: center;
          border-bottom: 1px solid rgba(23,23,23,.16);
        }
        .hero:before {
          content: "";
          position: absolute;
          width: 230px;
          height: 230px;
          border: 1px solid rgba(23,23,23,.18);
          border-radius: 50%;
          right: 4%;
          top: 65px;
        }
        .hero:after {
          content: "";
          position: absolute;
          width: 125px;
          height: 125px;
          border: 1px solid var(--pink);
          transform: rotate(18deg);
          right: 11%;
          top: 118px;
        }
        .hero-content { position: relative; z-index: 2; }
        .eyebrow {
          color: var(--pink);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 2px;
          margin-bottom: 22px;
        }
        h1 {
          font-size: clamp(68px, 10vw, 150px);
          line-height: .79;
          letter-spacing: -7px;
          margin: 0;
          font-weight: 950;
          text-transform: uppercase;
          max-width: 850px;
        }
        h1 span {
          display: block;
          color: var(--pink);
        }
        .hero-copy {
          max-width: 610px;
          margin-top: 30px;
          font-size: 16px;
          line-height: 1.6;
        }

        .demo-card {
          position: relative;
          z-index: 2;
          background: var(--black);
          color: white;
          padding: 38px;
          min-height: 290px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .demo-card .tiny {
          color: #d7d0c8;
          font-size: 9px;
          letter-spacing: 2px;
          font-weight: 800;
        }
        .demo-card h2 {
          font-size: 35px;
          line-height: 1;
          letter-spacing: -1.5px;
          margin: 14px 0 5px;
        }
        .artist {
          color: var(--pink);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1px;
        }
        .play {
          width: 100%;
          border: 0;
          background: var(--pink);
          color: white;
          padding: 17px;
          font-weight: 900;
          letter-spacing: 1.5px;
          cursor: pointer;
        }

        .section { padding: 86px 7vw; }
        .section-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          margin-bottom: 48px;
        }
        .section-label {
          color: var(--pink);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 2px;
        }
        .section h3 {
          margin: 10px 0 0;
          font-size: clamp(42px, 6vw, 78px);
          line-height: .9;
          letter-spacing: -4px;
          text-transform: uppercase;
        }

        .meaning { background: var(--paper); }
        .meaning-grid {
          display: grid;
          grid-template-columns: 1.5fr .5fr;
          gap: 70px;
          align-items: start;
        }
        .meaning-text {
          font-size: 21px;
          line-height: 1.55;
          max-width: 900px;
          margin: 0;
        }
        .pink-note {
          background: var(--pink);
          color: white;
          min-height: 190px;
          padding: 28px;
          display: flex;
          align-items: flex-end;
          font-size: 24px;
          font-weight: 900;
          line-height: 1;
          text-transform: uppercase;
          transform: rotate(-3deg);
        }

        .timeline { background: var(--black); color: white; }
        .timeline .section-label { color: #f1a1bc; }
        .timeline .section h3 { color: white; }
        .timeline-description {
          max-width: 360px;
          color: #d7d0c8;
          font-size: 14px;
          line-height: 1.5;
        }
        .track-wrap {
          margin-top: 60px;
          overflow-x: auto;
          padding-bottom: 15px;
        }
        .track {
          min-width: 980px;
          position: relative;
          height: 115px;
          border-top: 1px solid rgba(255,255,255,.45);
          border-bottom: 1px solid rgba(255,255,255,.18);
        }
        .track-line {
          position: absolute;
          left: 0;
          right: 0;
          top: 57px;
          height: 1px;
          background: rgba(255,255,255,.28);
        }
        .point {
          position: absolute;
          top: 43px;
          transform: translateX(-50%);
          width: 30px;
          height: 30px;
          border: 1px solid var(--pink);
          background: var(--black);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 12px;
          color: white;
          transition: transform .2s ease, background .2s ease;
        }
        .point:hover {
          transform: translateX(-50%) scale(1.25);
          background: var(--pink);
        }
        .point:after {
          content: "";
          position: absolute;
          width: 1px;
          height: 23px;
          background: var(--pink);
          top: -24px;
        }
        .time {
          position: absolute;
          top: 77px;
          transform: translateX(-50%);
          font-size: 10px;
          letter-spacing: 1px;
          color: #d7d0c8;
        }
        .legend {
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
          margin-top: 35px;
          font-size: 11px;
          color: #d7d0c8;
          letter-spacing: .7px;
        }

        .analysis { background: var(--cream); }
        .accent-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: rgba(23,23,23,.22);
          border: 1px solid rgba(23,23,23,.22);
        }
        .accent {
          background: var(--cream);
          padding: 28px 30px 32px;
          min-height: 170px;
          position: relative;
        }
        .accent:nth-child(even) { background: var(--paper); }
        .accent-time {
          color: var(--pink);
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 1px;
        }
        .accent-mark {
          position: absolute;
          right: 26px;
          top: 25px;
          font-size: 20px;
        }
        .accent h4 {
          margin: 26px 0 9px;
          font-size: 23px;
          letter-spacing: -.8px;
          text-transform: uppercase;
        }
        .accent p {
          margin: 0;
          max-width: 620px;
          font-size: 14px;
          line-height: 1.55;
          color: #55514d;
        }

        .layers { background: var(--paper); }
        .layers-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 0;
          border-top: 1px solid rgba(23,23,23,.25);
          border-bottom: 1px solid rgba(23,23,23,.25);
        }
        .layer {
          min-height: 160px;
          padding: 25px 20px;
          border-right: 1px solid rgba(23,23,23,.2);
        }
        .layer:last-child { border-right: 0; }
        .layer-no {
          color: var(--pink);
          font-size: 11px;
          font-weight: 900;
        }
        .layer h4 {
          margin: 38px 0 8px;
          font-size: 17px;
          text-transform: uppercase;
        }
        .layer p {
          margin: 0;
          color: #6a6560;
          font-size: 11px;
          line-height: 1.45;
        }

        .dance {
          background: var(--pink);
          color: white;
          min-height: 420px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: center;
        }
        .dance .section-label {
          color: white;
          opacity: .8;
        }
        .dance h3 { color: white; }
        .dance-copy {
          font-size: 17px;
          line-height: 1.6;
          max-width: 650px;
          margin: 25px 0 0;
        }
        .dance-list {
          border-top: 1px solid rgba(255,255,255,.5);
        }
        .dance-item {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 19px 0;
          border-bottom: 1px solid rgba(255,255,255,.5);
          font-weight: 800;
          font-size: 13px;
        }

        .footer {
          background: var(--black);
          color: white;
          padding: 75px 7vw;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        .footer-title {
          font-size: clamp(48px, 7vw, 95px);
          line-height: .8;
          letter-spacing: -5px;
          font-weight: 950;
        }
        .footer-title span { color: var(--pink); }
        .footer small {
          font-size: 9px;
          letter-spacing: 1.5px;
          color: #aaa;
        }

        @media (max-width: 1100px) {
          .nav { gap: 15px; }
          .nav a { font-size: 9px; }
          .hero { gap: 35px; }
          .layers-grid { grid-template-columns: repeat(3, 1fr); }
          .layer:nth-child(3) { border-right: 0; }
          .layer:nth-child(-n + 3) {
            border-bottom: 1px solid rgba(23,23,23,.2);
          }
        }

        @media (max-width: 900px) {
          .nav { display: none; }
          .hero {
            grid-template-columns: 1fr;
            padding-top: 60px;
          }
          .hero:before,
          .hero:after { opacity: .25; }
          .meaning-grid,
          .dance {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .dance { min-height: auto; }
        }

        @media (max-width: 600px) {
          .header {
            height: 76px;
            padding: 0 20px;
          }
          .logo strong { font-size: 23px; }
          .logo small {
            font-size: 6px;
            letter-spacing: 1.4px;
          }
          .signup {
            padding: 12px 13px;
            font-size: 9px;
          }
          .hero {
            padding: 55px 20px 65px;
            gap: 45px;
          }
          h1 {
            font-size: 65px;
            letter-spacing: -4px;
          }
          .hero-copy { font-size: 14px; }
          .demo-card { padding: 25px; }
          .demo-card h2 { font-size: 31px; }
          .section { padding: 65px 20px; }
          .section h3 { letter-spacing: -2px; }
          .section-head { display: block; }
          .section-head .section-label {
            display: block;
            margin-bottom: 15px;
          }
          .timeline-description { margin-top: 25px; }
          .meaning-text { font-size: 17px; }
          .pink-note { min-height: 150px; }
          .accent-grid { grid-template-columns: 1fr; }
          .accent { min-height: 155px; }
          .layers-grid { grid-template-columns: 1fr 1fr; }
          .layer {
            border-right: 1px solid rgba(23,23,23,.2) !important;
            border-bottom: 1px solid rgba(23,23,23,.2);
          }
          .layer:nth-child(even) { border-right: 0 !important; }
          .layer h4 { margin-top: 25px; }
          .dance-item { font-size: 11px; }
          .footer {
            display: block;
            padding: 55px 20px;
          }
          .footer small {
            display: block;
            margin-top: 35px;
          }
        }
      `}</style>

      <header className="header">
        <a href="/" className="logo">
          <strong>STEP TAP<span>.</span></strong>
          <small>[ ТАНЦЕВАЛЬНАЯ ШКОЛА ]</small>
        </a>

        <nav className="nav">
          <a href="/">ГЛАВНАЯ</a>
          <a href="/about">О ШКОЛЕ</a>
          <a href="/directions">НАПРАВЛЕНИЯ</a>
          <a href="/schedule">РАСПИСАНИЕ</a>
          <a href="/gallery">ГАЛЕРЕЯ</a>
          <a href="/contacts">КОНТАКТЫ</a>
        </nav>

        <a href="/signup" className="signup">ЗАПИСАТЬСЯ →</a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">[ МУЗЫКА / БАЧАТА / STEP TAP ]</div>
          <h1>
            СЛЫШИ
            <span>БОЛЬШЕ.</span>
          </h1>
          <p className="hero-copy">
            Разбираем песню не только по счёту. Слушаем перкуссию, бас,
            вокал, паузы и те маленькие акценты, которые обычно остаются
            незаметными.
          </p>
        </div>

        <div className="demo-card">
          <div>
            <div className="tiny">ДЕМО / РАЗБОР ПЕСНИ</div>
            <h2>
              Corazón
              <br />
              Sin Cara
            </h2>
            <div className="artist">PRINCE ROYCE</div>
          </div>
          <button className="play">▶ СЛУШАТЬ ПЕСНЮ</button>
        </div>
      </section>

      <section className="section meaning">
        <div className="section-head">
          <div>
            <div className="section-label">01 / СМЫСЛ</div>
            <h3>
              О ЧЁМ
              <br />
              ПЕСНЯ?
            </h3>
          </div>
        </div>

        <div className="meaning-grid">
          <p className="meaning-text">
            Здесь будет короткое и понятное объяснение смысла песни:
            история, настроение, эмоции и то, что исполнитель хочет
            передать. Не просто дословный перевод, а понимание того,
            что происходит внутри композиции.
          </p>

          <div className="pink-note">
            Сначала
            <br />
            почувствуй.
            <br />
            Потом танцуй.
          </div>
        </div>
      </section>

      <section className="section timeline">
        <div className="section-head">
          <div>
            <div className="section-label">02 / TIMELINE</div>
            <h3>
              УСЛЫШЬ
              <br />
              АКЦЕНТ.
            </h3>
          </div>

          <div className="timeline-description">
            Таймлайн всей песни. Отмечаем не только сильные удары,
            но и тихие детали, глубокие акценты и изменения
            музыкального рисунка.
          </div>
        </div>

        <div className="track-wrap">
          <div className="track">
            <div className="track-line" />

            {accents.map((item, index) => (
              <div
                key={item.time}
                className="point"
                style={{ left: `${index * 13.5 + 2}%` }}
                title={`${item.time} — ${item.type}`}
              >
                {item.mark}
              </div>
            ))}

            {accents.map((item, index) => (
              <div
                key={`time-${item.time}`}
                className="time"
                style={{ left: `${index * 13.5 + 2}%` }}
              >
                {item.time}
              </div>
            ))}
          </div>
        </div>

        <div className="legend">
          <span>🥁 ПЕРКУССИЯ</span>
          <span>🪘 БОНГО</span>
          <span>✦ ГЛУБОКИЙ АКЦЕНТ</span>
          <span>◦ ТИХАЯ ДЕТАЛЬ</span>
          <span>Ⅱ ПАУЗА</span>
        </div>
      </section>

      <section className="section analysis">
        <div className="section-head">
          <div>
            <div className="section-label">03 / ДЕТАЛИ</div>
            <h3>
              ЧТО ПРОИСХОДИТ
              <br />
              В МУЗЫКЕ
            </h3>
          </div>
        </div>

        <div className="accent-grid">
          {accents.map((item) => (
            <article className="accent" key={`card-${item.time}`}>
              <div className="accent-time">{item.time}</div>
              <div className="accent-mark">{item.mark}</div>
              <h4>{item.type}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section layers">
        <div className="section-head">
          <div>
            <div className="section-label">04 / СЛОИ</div>
            <h3>
              СЛУШАЕМ
              <br />
              ГЛУБЖЕ.
            </h3>
          </div>
        </div>

        <div className="layers-grid">
          <div className="layer">
            <div className="layer-no">01</div>
            <h4>Бит</h4>
            <p>Основной ритмический каркас.</p>
          </div>

          <div className="layer">
            <div className="layer-no">02</div>
            <h4>Бонго</h4>
            <p>Рисунок и отдельные удары.</p>
          </div>

          <div className="layer">
            <div className="layer-no">03</div>
            <h4>Бас</h4>
            <p>Низкие движения и акценты.</p>
          </div>

          <div className="layer">
            <div className="layer-no">04</div>
            <h4>Вокал</h4>
            <p>Фразы, окончания и импульсы.</p>
          </div>

          <div className="layer">
            <div className="layer-no">05</div>
            <h4>Детали</h4>
            <p>Шейкеры, щелчки, звонкие элементы.</p>
          </div>

          <div className="layer">
            <div className="layer-no">06</div>
            <h4>Паузы</h4>
            <p>Моменты, где музыка оставляет пространство.</p>
          </div>
        </div>
      </section>

      <section className="section dance">
        <div>
          <div className="section-label">05 / STEP TAP</div>

          <h3>
            А ТЕПЕРЬ
            <br />
            ТАНЦУЕМ.
          </h3>

          <p className="dance-copy">
            Этот блок не обязан появляться у каждой песни. Для
            избранных композиций здесь можно будет добавить
            рекомендации преподавателя: где сыграть акцент,
            где оставить паузу, где добавить styling или футворк.
          </p>
        </div>

        <div className="dance-list">
          <div className="dance-item">
            <span>АКЦЕНТ</span>
            <span>00:24 → ✦</span>
          </div>

          <div className="dance-item">
            <span>ПАУЗА</span>
            <span>00:49 → Ⅱ</span>
          </div>

          <div className="dance-item">
            <span>ПЕРКУССИЯ</span>
            <span>00:16 → 🪘</span>
          </div>

          <div className="dance-item">
            <span>ВИДЕО-РАЗБОР</span>
            <span>→ СКОРО</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-title">
          STEP TAP<span>.</span>
        </div>

        <small>МУЗЫКА · КОНТАКТ · УВЕРЕННОСТЬ</small>
      </footer>
    </main>
  );
}
