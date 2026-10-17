# Autrona

Autrona – tarptautinių pervežimų įmonės svetainė ([autrona.lt](https://autrona.lt/)), sukurta su [Nuxt 3](https://nuxt.com/).

Svetainė palaiko tris kalbas (LT, EN, RU) – vertimai laikomi `locales/` aplanke.

## Vietinis paleidimas

```bash
yarn install
yarn dev
```

Svetainė bus pasiekiama adresu [http://localhost:6636](http://localhost:6636).

## Svetainės atnaujinimas

Svetainė talpinama [IV.lt](https://klientams.iv.lt/) serveryje kaip statiniai failai.

1. Sugeneruojame statinę svetainės versiją:

   ```bash
   npx nuxi generate
   ```

   Rezultatai atsiranda `.output/public/` aplanke.

2. Prisijungiame prie [IV.lt klientų paskyros](https://klientams.iv.lt/?command=signin).
   Prisijungimo duomenys saugomi atskirai (ne repozitorijoje). Prisijungiant reikės PIN kodo, kurį gauna Justas.
3. Einame į **Ataskaitos → Talpinimas** ir pasirenkame **autrona.lt**.
4. Spaudžiame **Serverio valdymo pultas → File Manager**.
5. `.output/public/` turinį įkeliame į `public_html` aplanką.

## Repozitorija

[github.com/denisjankelaic/autrona-nuxt](https://github.com/denisjankelaic/autrona-nuxt)
