import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./song-analysis.css";

export default function SongAnalysisPage() {
  const accents = [
    {
      time: "00:00",
      type: "Вступление",
      text: "Начало композиции. Слушаем пространство и первое появление ритма.",
      mark: "INTRO",
    },
    {
      time: "00:08",
      type: "Перкуссия",
      text: "Лёгкий ритмический акцент, который легко пропустить.",
      mark: "🥁",
    },
    {
      time: "00:16",
      type: "Бонго",
      text: "Характерный рисунок бонго выходит вперёд.",
      mark: "🪘",
    },
    {
      time: "00:24",
      type: "Глубокий акцент",
      text: "Низкий акцент в музыке. Хороший момент, чтобы почувствовать смену энергии.",
      mark: "✦",
    },
    {
      time: "00:32",
      type: "Вокал",
      text: "Фраза вокала создаёт новый импульс.",
      mark: "🎤",
    },
    {
      time: "00:41",
      type: "Тихая деталь",
      text: "Небольшой фоновый звук — его слышно только при внимательном прослушивании.",
      mark: "◦",
    },
    {
      time: "00:49",
      type: "Пауза",
      text: "Короткое освобождение пространства перед следующим музыкальным движением.",
      mark: "Ⅱ",
    },
    {
      time: "00:57",
      type: "Акцент",
      text: "Яркий акцент в конце музыкальной фразы.",
      mark: "★",
    },
  ];

  return (
    <main className="song-page">
      <SiteHeader />

      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">[ МУЗЫКА / БАЧАТА / STEP TAP ]</div>
          <h1>
            СЛЫШИ
            <span>БОЛЬШЕ.</span>
          </h1>
          <p className="hero-copy">
            Разбираем песню не только по счёту. Слушаем перкуссию, бас, вокал, паузы и те
            маленькие акценты, которые обычно остаются незаметными.
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
            Здесь будет короткое и понятное объяснение смысла песни: история, настроение,
            эмоции и то, что исполнитель хочет передать. Не просто дословный перевод, а
            понимание того, что происходит внутри композиции.
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
            Таймлайн всей песни. Отмечаем не только сильные удары, но и тихие детали,
            глубокие акценты и изменения музыкального рисунка.
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
              <br />В МУЗЫКЕ
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
            Этот блок не обязан появляться у каждой песни. Для избранных композиций здесь
            можно будет добавить рекомендации преподавателя: где сыграть акцент, где
            оставить паузу, где добавить styling или футворк.
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

      <SiteFooter />
    </main>
  );
}
