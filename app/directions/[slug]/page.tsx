import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SignupLink } from "@/components/layout/SignupLink";
import { danceStyles, findStyle } from "@/data/directions";
import "./style-page.css";

export function generateStaticParams() {
  return danceStyles.map((style) => ({ slug: style.slug }));
}

export async function generateMetadata(
  props: PageProps<"/directions/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const style = findStyle(slug);
  if (!style) return { title: "Направление не найдено" };

  return {
    title: `${style.short} — направления`,
    description: style.description,
  };
}

/**
 * Страница одного направления — как в прототипе владельца: о чём оно,
 * кому подойдёт, чем будем заниматься, вопросы и запись.
 * Тексты — в data/directions.ts.
 */
export default async function StylePage(props: PageProps<"/directions/[slug]">) {
  const { slug } = await props.params;
  const style = findStyle(slug);
  if (!style) notFound();

  return (
    <main className="sp-page">
      <SiteHeader />

      <section className="sp-hero">
        <div className="sp-hero-copy">
          <Link className="sp-back" href="/directions">
            ← ВСЕ НАПРАВЛЕНИЯ
          </Link>
          <p className="sp-kicker">{style.title}</p>
          <h1>
            {style.hero.map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>

          <div className="sp-actions">
            <SignupLink className="sp-btn" ariaLabel={`Хочу попробовать: ${style.short}`}>
              ХОЧУ ПОПРОБОВАТЬ <span>→</span>
            </SignupLink>
            <Link className="sp-textlink" href="/schedule">
              РАСПИСАНИЕ
            </Link>
          </div>
        </div>

        {style.photo ? (
          <div className="sp-hero-photo">
            <Image
              src={style.photo.src}
              alt={style.photo.alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        ) : (
          <div className="sp-hero-art" aria-hidden="true">
            <div className="sp-rings">
              <span>{style.short}</span>
            </div>
          </div>
        )}
      </section>

      <section className="sp-learn">
        <p className="sp-kicker">НА ЗАНЯТИЯХ</p>
        <h2>
          ЧЕМ БУДЕМ
          <br />
          ЗАНИМАТЬСЯ.
        </h2>

        <div className="sp-learn-grid">
          {style.learn.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="sp-actions">
          <Link className="sp-btn sp-btn-ghost" href="/prices">
            ЦЕНЫ НА ЗАНЯТИЯ <span>→</span>
          </Link>
          <SignupLink className="sp-btn" ariaLabel={`Подобрать группу: ${style.short}`}>
            ПОДОБРАТЬ ГРУППУ <span>→</span>
          </SignupLink>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
