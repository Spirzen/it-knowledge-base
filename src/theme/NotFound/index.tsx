import React, {useEffect, type ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const UNIVERSE_URL =
  'https://it-un.ru/?utm_source=encyclopedia&utm_medium=redirect&utm_campaign=broken-link';

export default function NotFound(): ReactNode {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.replace(UNIVERSE_URL);
    }, 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <Layout title="Страница не найдена">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <Heading as="h1" className="hero__title">
              Статья не найдена
            </Heading>
            <p>
              Возможно, она была удалена или перенесена. Перенаправляем вас во Вселенную ИТ…
            </p>
            <a className="button button--primary" href={UNIVERSE_URL}>
              Перейти к Вселенной ИТ
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}
