import React, {useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import DemoShell, {DemoCard} from './shared/DemoShell';
import {demoLoadingFallback} from './shared/demoFallback';
import {
  DEFAULT_STOCK,
  INGREDIENTS,
  RECIPES,
  brew,
  canBrew,
} from './shared/coffeeMachineEngine';
import styles from './LangPracticeSpecial.module.css';

function CoffeeMachinePlayInner() {
  const [stock, setStock] = useState(DEFAULT_STOCK);
  const [recipeId, setRecipeId] = useState('latte');
  const [log, setLog] = useState('Выберите напиток и нажмите «Сварить».');

  const recipe = RECIPES.find((r) => r.id === recipeId) ?? RECIPES[0];
  const check = canBrew(stock, recipe);

  const handleBrew = () => {
    const result = brew(stock, recipe);
    setStock(result.stock);
    setLog(result.log);
  };

  const refill = () => {
    setStock({...DEFAULT_STOCK});
    setLog('Ресурсы пополнены (сервисный режим).');
  };

  return (
    <DemoShell>
      <DemoCard
        title="Кофемашина разработчика"
        subtitle="C# · классы, enum-рецепты, инкапсуляция запасов, обработка «исключений»"
      >
        <div className={styles.meters}>
          {INGREDIENTS.map((ing) => {
            const val = stock[ing.id] ?? 0;
            const pct = (val / ing.max) * 100;
            const low = pct < 25;
            return (
              <div key={ing.id} className={styles.meter}>
                <label>
                  {ing.label}: {val}
                  {ing.unit}
                </label>
                <div className={styles.meterBar}>
                  <div
                    className={clsx(styles.meterFill, low && styles.meterLow)}
                    style={{width: `${pct}%`}}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.recipeGrid}>
          {RECIPES.map((r) => (
            <button
              key={r.id}
              type="button"
              className={clsx(styles.recipeCard, recipeId === r.id && styles.recipeCardActive)}
              onClick={() => setRecipeId(r.id)}
            >
              <div className={styles.recipeName}>{r.name}</div>
              <div className={styles.recipeDesc}>{r.desc}</div>
            </button>
          ))}
        </div>

        <div className={styles.row}>
          <button
            type="button"
            className="it-demo__btn it-demo__btn--primary"
            onClick={handleBrew}
            disabled={!check.ok}
          >
            Сварить
          </button>
          <button type="button" className="it-demo__btn it-demo__btn--secondary" onClick={refill}>
            Сервис: пополнить
          </button>
        </div>

        {!check.ok && (
          <p className={styles.hint}>Не хватает: {check.missing.join(' · ')}</p>
        )}

        <div className={styles.log}>{log}</div>
        <p className={styles.hint}>
          Аналог в коде: класс <code>DrinkRecipe</code>, объект <code>IngredientStock</code>, метод{' '}
          <code>Brew()</code> бросает исключение при нехватке ресурсов.
        </p>
      </DemoCard>
    </DemoShell>
  );
}

export default function CoffeeMachinePlay() {
  return (
    <BrowserOnly fallback={demoLoadingFallback('Загрузка кофемашины…')}>
      {() => <CoffeeMachinePlayInner />}
    </BrowserOnly>
  );
}
