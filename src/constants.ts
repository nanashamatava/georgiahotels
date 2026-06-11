import { City, Hotel } from './types';
const tbilisiImg = 'https://upload.wikimedia.org/wikipedia/commons/4/45/View_of_Tbilisi_from_Tabori_Church_2023-10-08-2.jpg';
import batumiImg from './assets/images/regenerated_image_1780467836739.jpg';
const hotel1Img = 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800';
const hotel2Img = 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800';
const hotel3Img = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800';
const hotel4Img = 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800';
import kutaisiImg from './assets/images/regenerated_image_1778513367294.jpg';
import potiImg from './assets/images/regenerated_image_1779082477613.jpg';
import portoNovoPortImg from './assets/images/regenerated_image_1779082353732.jpg';
const zugdidiImg = 'https://cdn.georgiantravelguide.com/storage/files/zugdidi-samegrelo-zugdidi-samegrelo-2.jpg';
const gudauriImg = 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/14/ef/e5/84.jpg';
import mtskhetaImg from './assets/images/regenerated_image_1778512963309.jpg';
import telaviImg from './assets/images/regenerated_image_1778512971333.jpg';
import sighnaghiImg from './assets/images/regenerated_image_1778512972256.jpg';
import borjomiImg from './assets/images/regenerated_image_1778513150147.jpg';

export const CITIES: City[] = [
  {
    id: 'tbilisi',
    name: 'Tbilisi',
    image: tbilisiImg,
    description: 'The geometric heart of Georgia, where brutalist history meets modern luxury.'
  },
  {
    id: 'batumi',
    name: 'Batumi',
    image: batumiImg,
    description: 'A coastal blueprint of contemporary architecture and Black Sea rhythms.'
  },
  {
    id: 'poti',
    name: 'Poti',
    image: potiImg,
    description: 'Maritime industrial aesthetics paired with serene port-side hospitality.'
  },
  {
    id: 'kutaisi',
    name: 'Kutaisi',
    image: kutaisiImg,
    description: 'One of the world\'s oldest continuously inhabited cities, reborn in style.'
  },
  {
    id: 'zugdidi',
    name: 'Zugdidi',
    image: zugdidiImg,
    description: 'Royal heritage meets western Georgian charm in a balanced landscape.'
  },
  {
    id: 'borjomi',
    name: 'Borjomi',
    image: borjomiImg,
    description: 'A structural sanctuary of mineral waters and dense alpine vistas.'
  },
  {
    id: 'gudauri',
    name: 'Gudauri',
    image: gudauriImg,
    description: 'High-altitude brutalist retreats designed for peak vertical experiences.'
  },
  {
    id: 'mtskheta',
    name: 'Mtskheta',
    image: mtskhetaImg,
    description: 'The ancient foundation of Georgian identity, where confluence is sacred.'
  },
  {
    id: 'telavi',
    name: 'Telavi',
    image: telaviImg,
    description: 'A vineyard grid where tradition is fermented in modern concrete.'
  },
  {
    id: 'sighnaghi',
    name: 'Sighnaghi',
    image: sighnaghiImg,
    description: 'The geometric ridge of love, overlooking the Alazani architectural valley.'
  }
];

export const HOTELS: Hotel[] = [
  // Tbilisi
  {
    id: 'h1',
    name: 'Sheraton Grand Tbilisi Metechi Palace',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    address: '20 Telavi St, Tbilisi',
    cityId: 'tbilisi',
    ownerName: 'Giorgi Beridze',
    ownerPhone: '+995 32 277 20 20'
  },
  {
    id: 'h2',
    name: 'Radisson Blu Iveria Hotel',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
    address: '1 Rose Revolution Square, Tbilisi',
    cityId: 'tbilisi',
    ownerName: 'Nino Kapanadze',
    ownerPhone: '+995 32 240 22 22'
  },
  {
    id: 'h13',
    name: 'Stamba Hotel',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800',
    address: '14 Merab Kostava St, Tbilisi',
    cityId: 'tbilisi',
    ownerName: 'Temur Ugulava',
    ownerPhone: '+995 32 202 11 99'
  },
  {
    id: 'h14',
    name: 'The Biltmore Hotel Tbilisi',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800',
    address: '29 Shota Rustaveli Ave, Tbilisi',
    cityId: 'tbilisi',
    ownerName: 'Khalifa Bin Zayed',
    ownerPhone: '+995 32 272 72 72'
  },
  {
    id: 'h15',
    name: 'Rooms Hotel Tbilisi',
    image: 'https://images.unsplash.com/photo-1611891405120-d4c3c3102b55?auto=format&fit=crop&q=80&w=800',
    address: '14 Merab Kostava St, Tbilisi',
    cityId: 'tbilisi',
    ownerName: 'Valeri Chekheria',
    ownerPhone: '+995 32 202 00 99'
  },
  {
    id: 'h32',
    name: 'Iota Hotel Tbilisi',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800',
    address: '10 Mikheil Lermontov St, Tbilisi',
    cityId: 'tbilisi',
    ownerName: 'Liana Jojua',
    ownerPhone: '+995 32 240 30 30'
  },
  {
    id: 'h33',
    name: 'Wyndham Grand Tbilisi',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800',
    address: '2 Pasteur St, Tbilisi',
    cityId: 'tbilisi',
    ownerName: 'Zaza Pachulia',
    ownerPhone: '+995 32 243 90 00'
  },
  // Batumi
  {
    id: 'h3',
    name: 'Hilton Batumi',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=800',
    address: '13 Rustaveli Ave, Batumi',
    cityId: 'batumi',
    ownerName: 'Levan Makharadze',
    ownerPhone: '+995 422 22 22 22'
  },
  {
    id: 'h4',
    name: 'Sheraton Batumi Hotel',
    image: 'https://images.unsplash.com/photo-1611891404724-497862a114f6?auto=format&fit=crop&q=80&w=800',
    address: '28 Rustaveli Ave, Batumi',
    cityId: 'batumi',
    ownerName: 'Anano Tskvitinidze',
    ownerPhone: '+995 422 22 90 00'
  },
  {
    id: 'h16',
    name: 'Le Méridien Batumi',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
    address: 'Ninoshvili Street 1, Batumi',
    cityId: 'batumi',
    ownerName: 'David Jguenti',
    ownerPhone: '+995 422 29 90 90'
  },
  {
    id: 'h17',
    name: 'Wyndham Batumi',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=800',
    address: '33 Memed Abashidze St, Batumi',
    cityId: 'batumi',
    ownerName: 'George Charkviani',
    ownerPhone: '+995 422 24 24 24'
  },
  {
    id: 'h18',
    name: 'Colosseum Marina Hotel',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800',
    address: '16 Sherif Khimshiashvili St, Batumi',
    cityId: 'batumi',
    ownerName: 'Mamuka Khazaradze',
    ownerPhone: '+995 422 24 44 00'
  },
  {
    id: 'h34',
    name: 'JRW Welmond Hotel',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800',
    address: '126 Shavsheti St, Batumi',
    cityId: 'batumi',
    ownerName: 'Tedo Isakadze',
    ownerPhone: '+995 422 24 41 41'
  },
  {
    id: 'h35',
    name: 'Best Western Plus Batumi',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
    address: '89 Bagrationi St, Batumi',
    cityId: 'batumi',
    ownerName: 'Beka Odisharia',
    ownerPhone: '+995 422 24 01 01'
  },
  // Kutaisi
  {
    id: 'h5',
    name: 'Best Western Kutaisi',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
    address: 'White Bridge, Kutaisi',
    cityId: 'kutaisi',
    ownerName: 'Irakli Kobakhidze',
    ownerPhone: '+995 431 24 44 44'
  },
  {
    id: 'h19',
    name: 'Newport Hotel Kutaisi',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800',
    address: '1 Newport St, Kutaisi',
    cityId: 'kutaisi',
    ownerName: 'Mariam Jashi',
    ownerPhone: '+995 431 25 90 90'
  },
  {
    id: 'h20',
    name: 'Hotel Bagrati 1003',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800',
    address: '2 Tsereteli St, Kutaisi',
    cityId: 'kutaisi',
    ownerName: 'Badri Patarkatsishvili',
    ownerPhone: '+995 431 25 55 55'
  },
  {
    id: 'h36',
    name: 'Hotel Sanapiro',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=800',
    address: '7 Tsminda Nino St, Kutaisi',
    cityId: 'kutaisi',
    ownerName: 'Gela Gnolidze',
    ownerPhone: '+995 431 24 10 10'
  },
  {
    id: 'h37',
    name: 'Grand Opera Hotel',
    image: 'https://images.unsplash.com/photo-1551882547-ff43c33fefee?auto=format&fit=crop&q=80&w=800',
    address: '18 Paliashvili St, Kutaisi',
    cityId: 'kutaisi',
    ownerName: 'Davit Sergeenko',
    ownerPhone: '+995 431 25 11 11'
  },
  // Poti
  {
    id: 'h6',
    name: 'Porto Novo Hotel Poti',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    address: '9 April Alley, Poti',
    cityId: 'poti',
    ownerName: 'Zurab Abashidze',
    ownerPhone: '+995 493 22 00 00'
  },
  {
    id: 'h21',
    name: 'Anchor Hotel Poti',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
    address: 'David Agmashenebeli St, Poti',
    cityId: 'poti',
    ownerName: 'Lasha Talakhadze',
    ownerPhone: '+995 493 27 77 77'
  },
  {
    id: 'h38',
    name: 'Hotel Parc',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800',
    address: 'Central Park, Poti',
    cityId: 'poti',
    ownerName: 'Irakli Chikovani',
    ownerPhone: '+995 493 22 15 15'
  },
  {
    id: 'h39',
    name: 'Green House Poti',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
    address: '14 Lermontov St, Poti',
    cityId: 'poti',
    ownerName: 'Nona Gaprindashvili',
    ownerPhone: '+995 493 22 40 40'
  },
  // Zugdidi
  {
    id: 'h7',
    name: 'Hotel Leto Zugdidi',
    image: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&q=80&w=800',
    address: '2 Zviad Gamsakhurdia Ave, Zugdidi',
    cityId: 'zugdidi',
    ownerName: 'Maka Chkheidze',
    ownerPhone: '+995 415 22 11 11'
  },
  {
    id: 'h22',
    name: 'Garden Palace Zugdidi',
    image: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?auto=format&fit=crop&q=80&w=800',
    address: '15 Rustaveli St, Zugdidi',
    cityId: 'zugdidi',
    ownerName: 'Salome Zourabichvili',
    ownerPhone: '+995 415 25 00 00'
  },
  {
    id: 'h40',
    name: 'Dadiani Palace Hotel',
    image: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?auto=format&fit=crop&q=80&w=800',
    address: '8 Tabukashvili St, Zugdidi',
    cityId: 'zugdidi',
    ownerName: 'Anzor Melia',
    ownerPhone: '+995 415 22 90 90'
  },
  {
    id: 'h41',
    name: 'Zugdidi Boutique Hotel',
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800',
    address: '21 Kostava St, Zugdidi',
    cityId: 'zugdidi',
    ownerName: 'Goga Khaindrava',
    ownerPhone: '+995 415 22 01 01'
  },
  // Borjomi
  {
    id: 'h8',
    name: 'Crowne Plaza Borjomi',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800',
    address: '9 Baratashvili St, Borjomi',
    cityId: 'borjomi',
    ownerName: 'Nika Gvaramia',
    ownerPhone: '+995 367 22 50 50'
  },
  {
    id: 'h23',
    name: 'Borjomi Likani Health & Spa',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800',
    address: 'Meskheti Street 16, Borjomi',
    cityId: 'borjomi',
    ownerName: 'Kakha Kaladze',
    ownerPhone: '+995 367 22 10 10'
  },
  {
    id: 'h24',
    name: 'Golden Tulip Borjomi',
    image: 'https://images.unsplash.com/photo-1506059612708-99d6c258160e?auto=format&fit=crop&q=80&w=800',
    address: '9 April Street 48, Borjomi',
    cityId: 'borjomi',
    ownerName: 'Irakli Garibashvili',
    ownerPhone: '+995 367 22 55 00'
  },
  {
    id: 'h42',
    name: 'Borjomi Palace Hotel & Spa',
    image: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&q=80&w=800',
    address: 'Gamsakhurdia St, Borjomi',
    cityId: 'borjomi',
    ownerName: 'Vano Merabishvili',
    ownerPhone: '+995 367 22 30 30'
  },
  {
    id: 'h43',
    name: 'Milano Palace Borjomi',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800',
    address: '12 Rustaveli St, Borjomi',
    cityId: 'borjomi',
    ownerName: 'Sandra Roelofs',
    ownerPhone: '+995 367 22 70 70'
  },
  // Gudauri
  {
    id: 'h9',
    name: 'Marco Polo Hotel Gudauri',
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=800',
    address: 'Center Gudauri, Gudauri',
    cityId: 'gudauri',
    ownerName: 'Luka Modric',
    ownerPhone: '+995 32 220 29 00'
  },
  {
    id: 'h25',
    name: 'Gudauri Loft',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
    address: 'Upper Gudauri, Gudauri',
    cityId: 'gudauri',
    ownerName: 'Vidal Blanc',
    ownerPhone: '+995 599 11 22 33'
  },
  {
    id: 'h26',
    name: 'Quadrum Ski & Yoga Resort',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    address: 'Lower Gudauri, Gudauri',
    cityId: 'gudauri',
    ownerName: 'Irina Shayk',
    ownerPhone: '+995 595 44 55 66'
  },
  {
    id: 'h44',
    name: 'Hotel Club-7 Gudauri',
    image: 'https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&q=80&w=800',
    address: 'New Gudauri, Gudauri',
    cityId: 'gudauri',
    ownerName: 'Khvicha Kvaratskhelia',
    ownerPhone: '+995 599 77 88 99'
  },
  {
    id: 'h45',
    name: 'Gudauri Inn',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800',
    address: 'Lower Gudauri, Gudauri',
    cityId: 'gudauri',
    ownerName: 'Zurab Pololikashvili',
    ownerPhone: '+995 591 22 33 44'
  },
  // Mtskheta
  {
    id: 'h10',
    name: 'Hotel Gino Wellness Mtskheta',
    image: 'https://images.unsplash.com/photo-1529290130-4ca3753253ae?auto=format&fit=crop&q=80&w=800',
    address: 'Kostava St, Mtskheta',
    cityId: 'mtskheta',
    ownerName: 'Gino Rossi',
    ownerPhone: '+995 32 210 20 20'
  },
  {
    id: 'h27',
    name: 'Mtskheta Terrace',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800',
    address: 'Samkhedro Rd, Mtskheta',
    cityId: 'mtskheta',
    ownerName: 'Nodar Dumbadze',
    ownerPhone: '+995 577 33 44 55'
  },
  {
    id: 'h46',
    name: 'Hotel Aragvi',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800',
    address: 'Aragvi St, Mtskheta',
    cityId: 'mtskheta',
    ownerName: 'Davit Kipiani',
    ownerPhone: '+995 555 12 34 56'
  },
  {
    id: 'h47',
    name: 'Old Capital Mtskheta',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800',
    address: 'Narekvavi, Mtskheta',
    cityId: 'mtskheta',
    ownerName: 'Shota Arveladze',
    ownerPhone: '+995 595 10 20 30'
  },
  // Telavi
  {
    id: 'h11',
    name: 'Schuchmann Wines Chateau & Spa',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
    address: 'Kisiskhevi, Telavi',
    cityId: 'telavi',
    ownerName: 'Burkhard Schuchmann',
    ownerPhone: '+995 350 27 35 35'
  },
  {
    id: 'h28',
    name: 'Holiday Inn Telavi',
    image: 'https://images.unsplash.com/photo-1606046604972-77cc76aee944?auto=format&fit=crop&q=80&w=800',
    address: '1 H. Cholokashvili St, Telavi',
    cityId: 'telavi',
    ownerName: 'Guram Kashia',
    ownerPhone: '+995 350 23 00 00'
  },
  {
    id: 'h29',
    name: 'Chateau Mere',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
    address: 'Vardisubani, Telavi',
    cityId: 'telavi',
    ownerName: 'George Piradashvili',
    ownerPhone: '+995 350 27 99 99'
  },
  {
    id: 'h48',
    name: 'Telavi Old Town',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800',
    address: 'Erekle II St, Telavi',
    cityId: 'telavi',
    ownerName: 'Irakli Abashidze',
    ownerPhone: '+995 350 27 10 10'
  },
  {
    id: 'h49',
    name: 'Kvevri Wine Hotel',
    image: 'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?auto=format&fit=crop&q=80&w=800',
    address: 'Tsinandali, Telavi',
    cityId: 'telavi',
    ownerName: 'Lado Gurgenidze',
    ownerPhone: '+995 350 27 40 40'
  },
  // Sighnaghi
  {
    id: 'h12',
    name: 'Kabadoni Boutique Hotel',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800',
    address: '1 Tamar Mepe St, Sighnaghi',
    cityId: 'sighnaghi',
    ownerName: 'Tamuna Gurchiani',
    ownerPhone: '+995 355 23 10 20'
  },
  {
    id: 'h30',
    name: 'Hotel Brigitte',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
    address: 'Cholokashvili Street, Sighnaghi',
    cityId: 'sighnaghi',
    ownerName: 'Brigitte Bardot',
    ownerPhone: '+995 355 23 15 15'
  },
  {
    id: 'h31',
    name: 'Lost Ridge Inn',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    address: 'Qedeli, Sighnaghi',
    cityId: 'sighnaghi',
    ownerName: 'Nikoloz Tskitishvili',
    ownerPhone: '+995 591 00 99 88'
  },
  {
    id: 'h50',
    name: 'Sighnaghi Glamping',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800',
    address: 'Alazani Valley, Sighnaghi',
    cityId: 'sighnaghi',
    ownerName: 'Levan Koguashvili',
    ownerPhone: '+995 599 00 11 22'
  },
  {
    id: 'h51',
    name: 'Hotel Pirosmani',
    image: 'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?auto=format&fit=crop&q=80&w=800',
    address: 'Pirosmani St, Sighnaghi',
    cityId: 'sighnaghi',
    ownerName: 'Niko Pirosmani',
    ownerPhone: '+995 355 23 44 44'
  }
];
