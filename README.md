
![Group 3 (3)](https://user-images.githubusercontent.com/60084871/144291938-4a56b338-44d9-4b40-b29a-f509ac65cd60.png)


<h1 align="center">
	MPPL - Responsi 2 - Kelompok 4
</h1>

<h1 align="center">
	<a href="https://www.figma.com/file/3lJEGSeJpyWsLOErHkdfoC/MPPL-Kel-4?node-id=23%3A5">
	<img
	src="https://user-images.githubusercontent.com/48080443/122107501-563f8200-ce45-11eb-8001-b31a9729faad.png"/>
	</a>
	<a href="https://trello.com/b/eebDhCmi/mppl-kel-4">
    	<img
	src="https://user-images.githubusercontent.com/48080443/122107552-63f50780-ce45-11eb-8ed1-4b7051c17ed6.png"/> 
	</a>
</h1>




[Back-End](#back-end) | [Latar Belakang](#latar-belakang) | [Tujuan](#tujuan) | [Ruang Lingkup](#ruang-lingkup) | [Deskripsi](#deskripsi) | [User Analisis](#user-analisis) | [Spesifikasi](#spesifikasi-lingkup-pengembangan) | [Metode Pengembangan](#metode-pengembangan) | [Hasil dan Pembahasan](#hasil-dan-pembahasan) | [Stakeholders](#stakeholders) | [Identifikasi User](#identifikasi-user) | [Fitur Utama](#fitur-utama) | [Fungsi CRUD](#fungsi-crud) | [Implementasi](#implementasi) | [Link Aplikasi](#stakeholders) | [Developer dan Jobdesk](#developer-dan-jobdesk)
:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:

# :link: Back-End
[`^ kembali ke atas ^`](#)  
https://app.swaggerhub.com/apis-docs/bimaaul/mppl/1.0

# 📖 Latar Belakang
[`^ kembali ke atas ^`](#)  

Di masa teknologi ini, jasa pengembangan sistem informasi semakin diperlukan. Namun tidak sedikit orang yang kesulitan mendapat informasi jasa software developer yang terpercaya dan profesional. Begitu juga sebaliknya. Tidak jarang software developer juga kesulitan untuk mencari client karena jasanya belum dikenali banyak orang. Salah satu software developer yang merasakan hal tersebut adalah Mamen Rider. 

Mamen Rider merupakan salah satu kumpulan mahasiswa Ilmu Komputer IPB yang juga merupakan software developer dan sudah dikenal oleh teman-temannya. Selama perkuliahan, mereka sudah melakukan beberapa proyek yang dikerjakan bersamaan oleh setiap anggotanya. Setelah melakukan beberapa proyek bersama, mereka merasa hal tersebut merupakan suatu peluang yang besar bagi mereka terutama dalam bidang software development. 

Kedepannya Mamen Rider akan mengembangkan usaha jasa software development bernama Mamen Project dan menawarkannya kepada orang lain. Namun karena keterbatasan jejaring informasi, Mamen Rider kesulitan untuk menjangkau target clientnya dan tidak memiliki wadah untuk mempromosikan skill dan kemampuan mereka.

# :pushpin: Tujuan
[`^ kembali ke atas ^`](#) 
- Media untuk memperkenalkan Mamen Project dan profil Mamen Rider
- Memperluas jangkauan target client

# :ledger: Ruang Lingkup
[`^ kembali ke atas ^`](#) 
- Sistem yang dibuat berdasarkan kebutuhan dan permasalahan dari pihak client yaitu Mamen Rider
- Secara garis besar, sistem yang kami buat menyediakan informasi seputar profile dari pihak client, portofolio setiap anggota client, narahubung setiap anggota, dan informasi daftar proyek yang dapat dilakukan.
- Sistem berfungsi sebagai penghubung pihak client dan juga user yang hendak mencari pihak software developer yang dapat mengerjakan proyek bisnis mereka
- Aplikasi berbasis website sebagai client-side
- Pembuatan dan pengembangan program menggunakan PHP dengan framework React JS dan database menggunakan MySQL
- Dapat diakses dimana saja dengan koneksi internet

# 🖥 Deskripsi Aplikasi
[`^ kembali ke atas ^`](#) 

Mamen project adalah sebuah aplikasi berbasis website yang menyediakan informasi seputar profile pihak Mamen Rider, portofolio setiap anggota mereka, track record untuk setiap proyek yang berhasil mereka kerjakan, narahubung untuk melakukan kolaborasi, dan informasi review proyek yang telah berhasil dibuat. Tujuan dari dibuatnya aplikasi ini yaitu sebagai penghubung antara pihak Mamen Rider dan juga user yang hendak mencari software developer untuk mengembangkan produk bisnis mereka.

# :people_holding_hands: User Analisis
[`^ kembali ke atas ^`](#)

### User Story
“Sebagai seorang pembisnis yang ingin membuat startup, saya ingin dengan mudah mendapatkan informasi jasa di bidang software engineer agar saya dapat bekerja sama dengan mereka dan mewujudkan pembuatan software start up saya.”

“Sebagai seorang pembisnis yang ingin mencari jasa developer, saya ingin mengetahui testimoni dari beberapa developer yang saya temui agar saya dapat memperoleh developer terbaik untuk bekerjasama dengan saya nantinya.”

“Sebagai seorang pembisnis yang ingin mencari jasa developer, saya ingin mengetahui daftar keahlian apa saja yang dimiliki oleh developer tersebut agar saya dapat menyesuaikan dengan jenis keahlian yang dibutuhkan dengan project saya.”

“Sebagai seorang pembisnis yang ingin mencari jasa developer, saya ingin mengetahui track record dari developer tersebut agar saya dapat memperoleh developer terbaik untuk bekerjasama dengan saya nantinya.”


# ⚙️ Spesifikasi Lingkungan Pengembangan
[`^ kembali ke atas ^`](#)
### Software
<h1 align="center">
	<img
	src="https://user-images.githubusercontent.com/60166539/122099522-496a6080-ce3c-11eb-9109-1c7d38699a94.png"/>
</h1>

### Hardware
Perangkat keras yang dibutuhkan dalam pembuatan aplikasi ini adalah Laptop dengan spesifikasi minimal sebagai berikut.
- Prosesor Intel Core i5 gen 2.8 GHz  
- RAM 8 GB
- HDD 320 GB
- GPU Nvidia GeForce 920MX

### Tech Stack
<h1 align="center">
	<img
	src="https://user-images.githubusercontent.com/48080443/122120605-d28d9180-ce54-11eb-8c42-5cd51112f20d.png"/>
</h1>

MERN adalah singkatan dari MongoDB, Express, React, Node yang merupakan tech stack yang digunakan pada pengembangan aplikasi kali ini.

<table>
    <thead>
        <tr>
            <th>Nama</th>
            <th>Fungsi</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>MongoDB</td>
            <td>Database</td>
        </tr>
         <tr>
            <td>ExpressJS</td>
            <td>NodeJS Web Framework</td>
        </tr>
        <tr>
            <td>NodeJS</td>
            <td>JavaScript Web Server</td>
        </tr>
       <tr>
            <td>React JS</td>
            <td>Client-side JavaScript framework (Front-End)</td>
        </tr>
</tbody>
</table>

MERN adalah salah satu dari beberapa variasi stack MEAN (MongoDB, Express, Angular, Node), di mana Angular sebagai framework front-end tradisional digantikan dengan React.js. Variasi lainnya adalah MEVN (MongoDB, Express, Vue, Node) dan framework front end dengan bahasa pemrograman JavaScript apapun dapat digunakan.

# :rocket: Metode Pengembangan Desain
[`^ kembali ke atas ^`](#)
### Scrum
Metodologi yang digunakan dalam pengembangan sistem ini yaitu scrum dimana dalam pengembangannya dapat dilihat pada gambar berikut :

![agile-development-process](https://user-images.githubusercontent.com/60084871/144301696-54fc5217-b50c-433c-8628-c9b0b8e92e6a.png)

Scrum adalah salah satu metode rekayasa perangkat lunak dengan menggunakan prinsip-prinsip pendekatan AGILE, yang bertumpu pada kekuatan kolaborasi tim, incremental product dan proses iterasi untuk mewujudkan hasil akhir. 

Tahapan penting dalam metode Scrum dapat diuraikan menjadi beberapa poin, yakni:
1. Product Owner mendata seluruh permintaan terhadap produknya sesuai prioritasnya.
2. Scrum Team memilih salah satu pekerjaan atau item dari list prioritas Product Owner. Dalam tahap ini Scrum Team menganalisis, menggali, serta merencanakan alur kerja mereka dalam menyelesaikan pekerjaan ini.
3. Scrum team mengerjakan sesuai metode, bidang, dan permintaan yang telah disepakati bersama.
4. Scrum Master memastikan seluruh Scrum team bekerja sesuai rencana awal.
5. Di akhir waktu yang telah disediakan (sprint) atau ketika Developer Team telah menyelesaikan pekerjaannya, maka pekerjaan harus sudah siap untuk dikirim.
6. Review pekerjaan Scrum Team (review product).
7. Proyek dianggap selesai. Baik karena kualitas produk telah sesuai permintaan, atau karena pekerjaan sudah berada pada batas waktu yang ditentukan.


## Kick-off Meeting

<table>
    <thead>
        <tr>
            <th>Project Milestone</th>
		<th>Target Date</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>First meet bersama client</td>
            <td>Minggu, 29/08/21</td>
        </tr>
	<tr>
            <td>Membuat perancangan awal sesuai dengan kebutuhan client</td>
            <td>Minggu, 29/08/21</td>
        </tr>
	<tr>
            <td>Membuat Use Case Diagram, Activity Diagram, ERD, Arsitektur Diagram</td>
            <td>Minggu, 29/08/21 - Minggu, 05/09/21</td>
        </tr>
	<tr>
            <td>Membuat Desain Tampilan Sistem</td>
            <td>Minggu, 5/09/21 - Minggu, 12/09/21</td>
        </tr>
	<tr>
            <td>Melakukan meeting bersama client terkait desain yang telah dibuat</td>
            <td>Senin, 13/09/21</td>
        </tr>
	<tr>
            <td>Melakukan revisi terkait desain jika ada</td>
            <td>Selasa, 14/09/21 - Sabtu, 18/09/21</td>
        </tr>
	<tr>
            <td>Melakukan meet untuk fiksasi desain bersama client</td>
            <td>Minggu, 19/09/21</td>
        </tr>
	<tr>
            <td>Design database dan Backend</td>
            <td>Senin, 20/09/21 - Sabtu, 27/11/21</td>
        </tr>
	<tr>
            <td>Memulai pengerjaan implementasi desain (Front-end)</td>
            <td>Senin, 20/09/21 - Sabtu, 27/11/21</td>
        </tr>
	<tr>
            <td>Connect Front-end to Back-end</td>
            <td>Minggu, 28/11/21 - Kamis, 02/12/21</td>
        </tr>
	<tr>
            <td>Testing internal</td>
            <td>Kamis, 02/12/21</td>
        </tr>
	<tr>
            <td>Bug Fixing</td>
            <td>Kamis, 02/12/21 - Jum’at, 03/12/21</td>
        </tr>
	<tr>
            <td>User Acceptance Testing</td>
            <td>Sabtu, 04/12/21</td>
        </tr>
</tbody>
</table>


## Major Known Risks (including significant Assumptions) 

<table>
    <thead>
        <tr>
            <th>Risk</th>
		<th>Risk Rating (Hi, Med, Low)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Kesulitan mengimplementasikan fitur chat pada teknologi yang dipilih</td>
            <td>Medium</td>
        </tr>
	<tr>
            <td>Tidak adanya milestone pada proyek yang sedang dikerjakan</td>
            <td>Medium</td>
        </tr>
	<tr>
            <td>Kurangnya dokumentasi terkait perancangan dan pengembangan sistem</td>
            <td>Medium</td>
        </tr>
	<tr>
            <td>Pembuatan program yang terhambat waktunya karena programmer perlu belajar framework yang digunakan </td>
            <td>High</td>
        </tr>
</tbody>
</table>

## Communication Strategy

Metode komunikasi yang digunakan sebagai berikut :
1. Melakukan rapat rutin setiap minggu malam untuk mengerjakan LKP setiap minggunya, kemudian membahas task atau pun pekerjaan di setiap progres role yang dikerjakan
2. Melalui Trello, kami menggunakan list di setiap pekerjaan yang akan, sedang, ataupun telah diselesaikan oleh setiap anggota tim. List ini nantinya berupa catatan tanggal-tanggal penting, backlog, to-do, bugs, dan completed.
3. Melalui Github, kami melakukan dokumentasi terhadap sistem yang kami buat baik dari segi laporan maupun hasil kodingan file dari sistem kami yang sudah dikerjakan nantinya akan disatukan pada github kelompok kami. 


## Project Budget

<table>
    <thead>
        <tr>
            <th>Budget Name</th>
		<th>Budget Cost</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Landing Page ( Email form submission, Static View, Konten projects dan testimoni )</td>
            <td>Rp. 1.200.000,00</td>
        </tr>
	<tr>
            <td>Authentication ( Admin )</td>
            <td>Rp. 250.000,00</td>
        </tr>
	<tr>
            <td>Admin ( CRUD Content Landing Page, CRUD Anggota Mamen, CRUD Projek Mamen, CRUD Testimoni )</td>
            <td>Rp. 800.000,00</td>
        </tr>
	<tr>
            <td>Total Cost</td>
            <td>Total = Rp. 2.250.000,00</td>
        </tr>
</tbody>
</table>
	    
	    
# 🎊 Hasil dan Pembahasan
[`^ kembali ke atas ^`](#)  
### Use Case Diagram
<h1 align="center">
	<img
	src="https://user-images.githubusercontent.com/60084871/144302266-f2a180e9-1406-448c-b064-7540ff46d60e.png"/>
</h1>

Kami menawarkan ide sebuah platform dimana user dapat melakukan permintaan kerjasama dengan pihak Mamen sebagai software engineer dalam pengembangan bisnis atau proyek mereka. User dapat melihat profile Mamen secara lengkap, daftar keahlian, profile anggota, riwayat projek, testimoni, serta melakukan pengajuan kerjasama. User dapat melakukan pengajuan untuk kerjasama dengan mengisikan form yang terdapat pada aplikasi dan mengirimkan data form tersebut. Kemudian pengajuan itu akan masuk ke dalam daftar permintaan pada aplikasi admin Mamen yang nantinya pengajuan tersebut dapat dilakukan tindakan lebih lanjut oleh admin untuk disetujui dan diterima.

Estimasi effort dan biaya dari use case diagram tersebut yang dihitung menggunakan metode Use Case Point (UCP) yaitu sebagai berikut

<h1 align="center">
	<img
	src="https://user-images.githubusercontent.com/60084871/144569577-a8b15b76-6a10-409f-be00-bfbece133193.png"/>
</h1>

<h1 align="center">
	<img
	src="https://user-images.githubusercontent.com/60084871/144569655-ae3b62c2-5fff-4259-83c1-6b6c9bc0ea1d.png"/>
</h1>

Menurut kelompok kami, metode yang direkomendasikan adalah Use Case Point. Alasannya karena pada use case point dihitung berdasarkan model dan jumlah use case sistem. Dalam perhitungannya, diperhitungkan juga faktor kompleksitas teknis dan lingkungan. Sehingga perkiraan biaya yang dihasilkan lebih menyeluruh karena tidak hanya faktor teknis saja yang diperhitungkan tetapi juga kondisi dan kemampuan internal tim pengembang. Sedangkang metode Function Point hanya mepertimbangkan faktor teknis saja, tanpa memperhitungkan faktor lingkungan tim pengembang.


### Activity Diagram
<h1 align="center">
	<img
	src="https://user-images.githubusercontent.com/60083962/144602444-82d23499-30da-4667-be17-0864622a2bf3.png"/>
	<img
</h1>

### ERD
<h1 align="center">
	<img
	src="https://user-images.githubusercontent.com/60084871/144303956-14fc1cae-19ea-46ee-b5d2-942923b450bc.jpg"/>
</h1>

### Arsitektur Diagram
<h1 align="center">
	<img
	src="https://user-images.githubusercontent.com/60083962/144602837-03e82377-728d-4252-a27a-06397e2ab0e6.png"/>
</h1>

# :man_teacher: Stakeholder yang Terlibat
[`^ kembali ke atas ^`](#)
	
<table>
    <thead>
        <tr>
            <th>No</th>
            <th>Stakeholders</th>
             <th>Informasi yang Ingin Didapatkan</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1.</td>
            <td>Mamen (Admin)</td>
            <td>Data mengenai profil umum Mamen Rider, keanggotaan, portofolio yang berisi projek yang sudah dikerjakan, dan narahubung setiap anggota Mamen rider.</td>
        </tr>
	<tr>
            <td>2.</td>
            <td>Orang/Perusahaan yang membutuhkan jasa developer</td>
            <td>Data nama dan email sebagai client yang akan menanyakan informasi terkait projek Mamen rider.</td>
        </tr>
</tbody>
</table>
	
# :couple: Identifikasi Jenis User
[`^ kembali ke atas ^`](#)

<table>
    <thead>
        <tr>
            <th>No</th>
            <th>Pengguna</th>
             <th>Task yang Dilakukan</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1.</td>
            <td>Orang yang membutuhkan jasa developer</td>
            <td> Melihat company profile dari Mamen Rider, Melihat profile anggota, Melihat riwayat projek, dan Mengirimkan tawaran projek</td>
        </tr>
	<tr>
            <td>2.</td>
            <td>Perusahaan yang membutuhkan developer tambahan (outsourcing)</td>
            <td>Melihat company profile dari Mamen Rider, Melihat profile anggota, Melihat riwayat projek, Mengajukan program kerja sama</td>
        </tr>
	<tr>
            <td>3.</td>
            <td>Admin</td>
            <td>CRUD anggota, CRUD projek, CRUD testimoni, Read Permintaan, Delete Permintaan, dan Monitoring projek yang berjalan</td>
        </tr>
</tbody>
</table>
	
# :high_brightness: Fitur Utama yang Dikembangkan
[`^ kembali ke atas ^`](#)

<table>
    <thead>
        <tr>
            <th>No</th>
            <th>Fitur</th>
             <th>Keguanaan dan Fungsi</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1.</td>
            <td>Menampilkan profil dan informasi keanggotaan</td>
            <td> Memberikan informasi tentang data diri dari tiap anggota Mamen Rider</td>
        </tr>
	<tr>
            <td>2.</td>
            <td>Menampilkan informasi portofolio setiap anggota</td>
            <td>Memberikan informasi tentang daftar portofolio/project yang pernah dikerjakan dan kemampuan yang dikuasai setiap anggota Mamen Rider</td>
        </tr>
	<tr>
            <td>3.</td>
            <td>Informasi proyek yang dapat dikerjakan</td>
            <td>Memberitahukan batasan proyek yang dapat ditawarkan oleh client dan dikerjakan Mamen</td>
        </tr>
	<tr>
            <td>4.</td>
            <td>Informasi narahubung setiap anggota</td>
            <td>Memudahkan calon client untuk berkomunikasi dengan anggota Mamen secara personal melalui linkedin</td>
        </tr>
</tbody>
</table>

# :high_brightness: Fungsi CRUD
[`^ kembali ke atas ^`](#)

<table>
    <thead>
        <tr>
            <th>Nama Fitur</th>
            <th>Fungsi CRUD</th>
        </tr>
    </thead>
    <tbody>
        <tr>
	<td>Tentang Kami</td>
            <td>	
		    	Create : Admin dapat memasukkan informasi profile Mamen Rider
			
		    	Read : User dapat melihat detail informasi Mamen Rider
			
		    	Update : Admin dapat mengedit informasi tentang kami yang telah dibuat
</td>
		 </tr>
	    <tr>
	<td>Project Kami</td>
            <td>	
		    	Create : Admin dapat memasukkan daftar project yang berhasil dikerjakan
			
		    	Read : User dapat melihat daftar project Mamen Rider
			
		    	Update : Admin dapat mengedit informasi project yang telah dibuat
			
		    	Delete :  Admin dapat menghapus project yang telah dibuat
</td>
	     </tr>
	    <tr>
	<td>Anggota</td>
            <td>	
		    	Create : Admin dapat memasukkan daftar anggota Mamen Rider
			
		    	Read : User dapat melihat daftar anggota Mamen Rider
			
		    	Update : Admin dapat mengedit informasi anggota yang telah dibuat
			
		    	Delete :  Admin dapat menghapus daftar anggota yang telah dibuat
</td>
		    </tr>
		    <tr>
            <td>Testimoni</td>
            <td>	
		    	Create : Admin dapat memasukkan daftar testimoni client mereka
			
		    	Read : User dapat melihat daftar testimoni client

		   	Update : Admin dapat mengedit testimoni yang telah dibuat

		    	Delete :  Admin dapat menghapus testimoni yang telah dibuat
</td>
			    </tr>
	    <tr>
            <td>Permintaan</td>
            <td>	
		    	Create : User dapat membuat permintaan kerjasama
		    	
		    	Read : Admin dapat melihat daftar permintaan yang masuk
		    	
		    	Delete :  Admin dapat menghapus daftar permintaan yang masuk
</td>
        </tr>
</tbody>
</table>
	
	
## Change Log (catatan perubahan)
	
<table>
    <thead>
        <tr>
            <th>Change Type</th>
            <th>Description of Change</th>
		<th>Comments</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>	
		    	Tipe : Desain
		    	
		    	Requestor : Front-end
		    	
		    	Status : Denied
</td>
		<td>Pada website user, di halaman "Tentang Kami" menu pop-up untuk melihat data lebih lengkap ditiadakan karena implementasi yang cukup sulit </td>
		<td>Perubahan untuk meniadakan pop-up pada "Tentang Kami"  akhirnya tidak direalisasikan karena pada prosesnya pop up berhasil diimplementasikan dan memakai material UI </td>
		</tr>
	   <tr>
            <td>	
		    	Tipe : Desain
		    	
		    	Requestor : PM & UI/UX Designer
		    	
		    	Status : Approved
</td>
		<td>Fitur chat pada desain aplikasi ditiadakan karena implementasi yang sulit dan konfirmasi dari pihak client yang belum membutuhkan fitur tersebut </td>
		<td>Perubahan untuk meniadakan implementasi fitur chat diterima karena dari pihak client pun ternyata tidak begitu membutuhkan fitur itu di web mereka </td>
		</tr>
	 <tr>
            <td>	
		    	Tipe : Tech Stack
		    	
		    	Requestor : Back-end
		    	
		    	Status : Approved
</td>
		<td>Database yang digunakan diganti dari mysql menjadi mongo </td>
		<td>Implementasi dapat lebih sederhana dan lebih familiar dengan developer </td>
		</tr>
	    <tr>
            <td>	
		    	Tipe : Schedule
		    	
		    	Requestor : Front-End
		    	
		    	Status : Approved
</td>
		<td>Perubahan jadwal implementasi dilakukan dengan menyesuaikan pelaksanaan implementasi yang dilakukan  </td>
		<td>Dibuatnya perubahan pembaruan jadwal pengerjaan projek baru untuk menyesuaikan dengan pelaksanaan implementasi dari pihak front end developer </td>
		</tr>
</tbody>
</table>
	
# 🚀 Hasil Implementasi
[`^ kembali ke atas ^`](#)

# :link: Link Aplikasi
[`^ kembali ke atas ^`](#)

# 👨‍🏫 Developer dan Job Desc
[`^ kembali ke atas ^`](#)  

👩 <b>Mutia Marcha Fatika | G64180085 </b> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Role: <a>Project Manager & UI/UX Designer</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: <a>mutia_kemala@apps.ipb.ac.id</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GitHub: <a href="https://github.com/mutiamarchaa">@mutiamarchaa</a> <br>
  

👦 <b>Bima Aulia | G64180063</b> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Role: <a>Back-End</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: <a>bimaaulia.15@gmail.com</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GitHub: <a href="https://github.com/bimaaul">@bimaaul</a> <br>

👩 <b>Hana Salsabila | G64180051</b> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Role: <a>Front-End</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: <a>hana_17@apps.ipb.ac.id</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GitHub: <a href="https://github.com/hanasalsaa">@hanasalsaa</a> <br>
  
👦 <b>Muhammad Hafiduddin | G64180017</b> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Role: <a>Front-End</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: <a>hafiduddin_31@apps.ipb.ac.id</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GitHub: <a href="https://github.com/fid3101">@fid3101</a> <br>
  
👦 <b>Arya Aminata | G64180007</b> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Role: <a>Front-End</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: <a>arya_aminata93@apps.ipb.ac.id</a> <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GitHub: <a href="https://github.com/aryaaminata093">@aryaaminata093</a> <br>
