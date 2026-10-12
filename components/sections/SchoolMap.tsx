import { siteContacts, yandexMapEmbedUrl, yandexMapPageUrl } from "@/data/site";
import "./contacts.css";
import { Arrow } from "@/components/ui/Arrow";

/**
 * Карта Яндекса с карточкой школы и кнопкой «Открыть Яндекс Карты».
 * Стоит на чёрном фоне: в «Контактах» и внизу главной.
 * loading="lazy" — виджет не грузится, пока до него не долистают.
 */
export function SchoolMap() {
  return (
    <div className="contacts-map">
      <div className="contacts-map-frame">
        <iframe
          src={yandexMapEmbedUrl()}
          title={`STEP TAP на карте — ${siteContacts.address}`}
          loading="lazy"
          allowFullScreen
        />
      </div>

      <div className="contacts-map-foot">
        <p>
          <b>ТВОЙ МАРШРУТ НА ТАНЦЫ.</b>
          <span>
            {siteContacts.address}
            {siteContacts.addressNote && ` · ${siteContacts.addressNote}`}
          </span>
        </p>

        <a href={yandexMapPageUrl()} target="_blank" rel="noreferrer">
          ОТКРЫТЬ ЯНДЕКС КАРТЫ{" "}
          <span>
            <Arrow />
          </span>
        </a>
      </div>
    </div>
  );
}
