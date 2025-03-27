# E-commerce Microfrontend Projesi

Bu proje, üç ayrı uygulamadan oluşan bir e-ticaret mikrofrontend yapısıdır: Host App, Products Remote ve Basket Remote. Her bir uygulama bağımsız olarak çalışır ve Module Federation kullanılarak entegre edilir.

## Gereksinimler

- Node.js (v14 veya üstü)
- npm (v6 veya üstü)

## Kurulum

Her bir uygulama için aşağıdaki adımları izleyin:

### 1. Host App

1. Terminali açın ve `host-app` dizinine gidin:
   ```bash
   cd e-commerce-microfrontend/host-app
   ```

2. Gerekli paketleri yükleyin:
   ```bash
   npm install
   ```

3. Uygulamayı başlatın:
   ```bash
   npm run dev
   ```

4. Tarayıcınızda `http://localhost:3000` adresine gidin.

### 2. Products Remote

1. Terminali açın ve `products-remote` dizinine gidin:
   ```bash
   cd e-commerce-microfrontend/products-remote
   ```

2. Gerekli paketleri yükleyin:
   ```bash
   npm install
   ```

3. Uygulamayı başlatın:
   ```bash
   npm run dev
   ```

4. Tarayıcınızda `http://localhost:3001` adresine gidin.

### 3. Basket Remote

1. Terminali açın ve `basket-remote` dizinine gidin:
   ```bash
   cd e-commerce-microfrontend/basket-remote
   ```

2. Gerekli paketleri yükleyin:
   ```bash
   npm install
   ```

3. Uygulamayı başlatın:
   ```bash
   npm start
   ```

4. Tarayıcınızda `http://localhost:3002` adresine gidin.

## Notlar

- Her uygulama kendi bağımsız sunucusunda çalışır ve belirli bir port üzerinden erişilebilir.
- Uygulamaların düzgün çalışabilmesi için tüm bağımlılıkların doğru şekilde yüklenmiş olması gerekmektedir.
- Uygulamalar arasında iletişim, Module Federation kullanılarak sağlanır. Bu nedenle, yapılandırma dosyalarının doğru olduğundan emin olun. 
-3 uygulamayı da next.js ile oluşturduğumda ya da module federation yerine iframe yaklaşımı ile iletişim sağladığımda herhangi bir sorunla karşılaşmadım ancak mevcut yapıda doğru şekilde export/import yapmama rağmen host-app ile basket-remote iletişimi sağlanamadı. ana uygulama olan host-app diğer iki uygulamayı da offline olarak gördü sürekli.
