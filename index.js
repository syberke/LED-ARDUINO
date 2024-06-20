#define MERAH 5
#define KUNING 6
#define HIJAU 7
void setup() {
   /*melakukan konfigurasi awal dan menetapkan kondisi 
  yang kita butuhkan sebelum program utama.*/
 pinMode(MERAH, OUTPUT);
   pinMode(KUNING, OUTPUT);
    pinMode(HIJAU, OUTPUT);
}
void menyala() {
  /* perintah untuk Lampu agar menyala
   atau mati berapa lama*/
digitalWrite(MERAH, HIGH);
  delay(4000);
  digitalWrite(KUNING, HIGH);
   delay(5000);
  digitalWrite(MERAH, LOW);
digitalWrite(KUNING, LOW);
digitalWrite(HIJAU, HIGH);
    delay(15000);
digitalWrite(HIJAU, LOW);
}
void loop() {
   /*tempat instruksi-instruksi yang berjalan secara 
   berulang untuk menjalankan logika utama program*/
  menyala();

}
