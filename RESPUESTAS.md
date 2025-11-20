# RESPUESTAS — Validación y logs

## Identificación de fallos en logs

- Linter (ESLint):
  - Un run fallido muestra reglas infringidas y rutas de archivos.
  - El paso "Lint" en Actions se marca en rojo y el workflow se detiene.
- Pruebas (Jest):
  - Muestra suites y tests fallidos con diff esperado/recibido.
  - El resumen final indica tests fallidos; el workflow se detiene.
- Cobertura (Jest):
  - Se imprime tabla de cobertura. Si el umbral global < 80%, Jest finaliza con error e impide continuar.

## Cómo generar un run fallido

- Por linter: introduce `==` en lugar de `===` o agrega una variable sin uso.
- Por pruebas: cambia una función en `src/calculator.js` para romper expectativas.
- Por cobertura: sube temporalmente el umbral en `jest.config.js` a 100%.

## Cómo generar un run exitoso

- Revertir los cambios anteriores y ejecutar `npm run lint`, `npm run build`, `npm test` localmente.
- Hacer `push` y verificar que todos los pasos quedan en verde en Actions.

## Capturas de evidencia solicitadas

- Run fallido: captura del job que falla (Lint o Test) mostrando el error.
- Run exitoso: captura del workflow completo en verde y del resumen de cobertura.

## Diferencias clave entre run fallido y exitoso

- Estado del workflow:
  - Fallido: marca en rojo el paso problemático y no genera artefactos.
  - Exitoso: todos los pasos en verde y artefacto `coverage/lcov.info` disponible.
- Mensajes de consola:
  - Fallido: mensajes de error con stack o reglas infringidas.
  - Exitoso: tabla de cobertura y conteos de tests pasados.