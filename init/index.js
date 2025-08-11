// const mongoose = require("mongoose");
// const State = require("../src/models/StateModel.js");
// const City = require("../src/models/CityModel.js");
// const Area = require("../src/models/AreaModel.js");

// const MONGO_URI = "mongodb+srv://prahladkumar0878:VuIfFwte6oNghrLF@cluster0.7cmf1i5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // 🔹 Replace with your Mongo URI

// // Full dataset — 28 states, 2 cities per state, 2 areas per city
// const data = [
//     { state: "Andhra Pradesh", cities: [
//         { name: "Visakhapatnam", areas: [{ name: "MVP Colony", pincode: 530017 }, { name: "Gajuwaka", pincode: 530026 }] },
//         { name: "Vijayawada", areas: [{ name: "Benz Circle", pincode: 520010 }, { name: "Kanuru", pincode: 520007 }] }
//     ]},
//     { state: "Arunachal Pradesh", cities: [
//         { name: "Itanagar", areas: [{ name: "Naharlagun", pincode: 791110 }, { name: "Chimpu", pincode: 791113 }] },
//         { name: "Pasighat", areas: [{ name: "Rani Village", pincode: 791102 }, { name: "Pine Grove", pincode: 791103 }] }
//     ]},
//     { state: "Assam", cities: [
//         { name: "Guwahati", areas: [{ name: "Beltola", pincode: 781028 }, { name: "Dispur", pincode: 781005 }] },
//         { name: "Dibrugarh", areas: [{ name: "Mancotta Road", pincode: 786001 }, { name: "Chowkidinghee", pincode: 786003 }] }
//     ]},
//     { state: "Bihar", cities: [
//         { name: "Patna", areas: [{ name: "Kankarbagh", pincode: 800020 }, { name: "Rajendra Nagar", pincode: 800016 }] },
//         { name: "Gaya", areas: [{ name: "Civil Lines", pincode: 823001 }, { name: "Bodh Gaya", pincode: 824231 }] }
//     ]},
//     { state: "Chhattisgarh", cities: [
//         { name: "Raipur", areas: [{ name: "Shankar Nagar", pincode: 492007 }, { name: "Pandri", pincode: 492004 }] },
//         { name: "Bhilai", areas: [{ name: "Sector 6", pincode: 490006 }, { name: "Sector 10", pincode: 490010 }] }
//     ]},
//     { state: "Goa", cities: [
//         { name: "Panaji", areas: [{ name: "Miramar", pincode: 403001 }, { name: "Dona Paula", pincode: 403004 }] },
//         { name: "Margao", areas: [{ name: "Fatorda", pincode: 403602 }, { name: "Borda", pincode: 403602 }] }
//     ]},
//     { state: "Gujarat", cities: [
//         { name: "Ahmedabad", areas: [{ name: "Navrangpura", pincode: 380009 }, { name: "Maninagar", pincode: 380008 }] },
//         { name: "Surat", areas: [{ name: "Adajan", pincode: 395009 }, { name: "Katargam", pincode: 395004 }] }
//     ]},
//     { state: "Haryana", cities: [
//         { name: "Gurugram", areas: [{ name: "DLF Phase 3", pincode: 122010 }, { name: "Sohna Road", pincode: 122018 }] },
//         { name: "Faridabad", areas: [{ name: "Sector 15", pincode: 121007 }, { name: "Ballabgarh", pincode: 121004 }] }
//     ]},
//     { state: "Himachal Pradesh", cities: [
//         { name: "Shimla", areas: [{ name: "Lakkar Bazar", pincode: 171001 }, { name: "Sanjauli", pincode: 171006 }] },
//         { name: "Manali", areas: [{ name: "Old Manali", pincode: 175131 }, { name: "Mall Road", pincode: 175131 }] }
//     ]},
//     { state: "Jharkhand", cities: [
//         { name: "Ranchi", areas: [{ name: "Kanke", pincode: 834006 }, { name: "Lalpur", pincode: 834001 }] },
//         { name: "Jamshedpur", areas: [{ name: "Bistupur", pincode: 831001 }, { name: "Sakchi", pincode: 831001 }] }
//     ]},
//     { state: "Karnataka", cities: [
//         { name: "Bengaluru", areas: [{ name: "Whitefield", pincode: 560066 }, { name: "Koramangala", pincode: 560034 }] },
//         { name: "Mysuru", areas: [{ name: "Vijayanagar", pincode: 570017 }, { name: "Jayalakshmipuram", pincode: 570012 }] }
//     ]},
//     { state: "Kerala", cities: [
//         { name: "Kochi", areas: [{ name: "Fort Kochi", pincode: 682001 }, { name: "Edappally", pincode: 682024 }] },
//         { name: "Thiruvananthapuram", areas: [{ name: "Kowdiar", pincode: 695003 }, { name: "Pattom", pincode: 695004 }] }
//     ]},
//     { state: "Madhya Pradesh", cities: [
//         { name: "Bhopal", areas: [{ name: "Arera Colony", pincode: 462016 }, { name: "TT Nagar", pincode: 462003 }] },
//         { name: "Indore", areas: [{ name: "Vijay Nagar", pincode: 452010 }, { name: "Rajwada", pincode: 452002 }] }
//     ]},
//     { state: "Maharashtra", cities: [
//         { name: "Mumbai", areas: [{ name: "Andheri West", pincode: 400053 }, { name: "Bandra East", pincode: 400051 }] },
//         { name: "Pune", areas: [{ name: "Kothrud", pincode: 411038 }, { name: "Hadapsar", pincode: 411028 }] }
//     ]},
//     { state: "Manipur", cities: [
//         { name: "Imphal", areas: [{ name: "Singjamei", pincode: 795001 }, { name: "Thangmeiband", pincode: 795004 }] },
//         { name: "Churachandpur", areas: [{ name: "Rengkai", pincode: 795128 }, { name: "Lamka", pincode: 795128 }] }
//     ]},
//     { state: "Meghalaya", cities: [
//         { name: "Shillong", areas: [{ name: "Laitumkhrah", pincode: 793003 }, { name: "Polo", pincode: 793001 }] },
//         { name: "Tura", areas: [{ name: "Rongkhon", pincode: 794001 }, { name: "Chandmari", pincode: 794002 }] }
//     ]},
//     { state: "Mizoram", cities: [
//         { name: "Aizawl", areas: [{ name: "Bawngkawn", pincode: 796014 }, { name: "Chanmari", pincode: 796007 }] },
//         { name: "Lunglei", areas: [{ name: "Electric Veng", pincode: 796701 }, { name: "Ramthar", pincode: 796701 }] }
//     ]},
//     { state: "Nagaland", cities: [
//         { name: "Kohima", areas: [{ name: "PR Hill", pincode: 797001 }, { name: "Bara Basti", pincode: 797001 }] },
//         { name: "Dimapur", areas: [{ name: "Duncan Basti", pincode: 797112 }, { name: "Nepali Basti", pincode: 797112 }] }
//     ]},
//     { state: "Odisha", cities: [
//         { name: "Bhubaneswar", areas: [{ name: "Sahid Nagar", pincode: 751007 }, { name: "Jaydev Vihar", pincode: 751013 }] },
//         { name: "Cuttack", areas: [{ name: "Choudhury Bazar", pincode: 753001 }, { name: "College Square", pincode: 753003 }] }
//     ]},
//     { state: "Punjab", cities: [
//         { name: "Amritsar", areas: [{ name: "Ranjit Avenue", pincode: 143001 }, { name: "Hall Bazar", pincode: 143006 }] },
//         { name: "Ludhiana", areas: [{ name: "Model Town", pincode: 141002 }, { name: "Civil Lines", pincode: 141001 }] }
//     ]},
//     { state: "Rajasthan", cities: [
//         { name: "Jaipur", areas: [{ name: "Vaishali Nagar", pincode: 302021 }, { name: "Malviya Nagar", pincode: 302017 }] },
//         { name: "Jodhpur", areas: [{ name: "Sardarpura", pincode: 342003 }, { name: "Shastri Nagar", pincode: 342001 }] }
//     ]},
//     { state: "Sikkim", cities: [
//         { name: "Gangtok", areas: [{ name: "MG Marg", pincode: 737101 }, { name: "Tadong", pincode: 737102 }] },
//         { name: "Namchi", areas: [{ name: "Boomtar", pincode: 737126 }, { name: "Upper Ghurpisey", pincode: 737126 }] }
//     ]},
//     { state: "Tamil Nadu", cities: [
//         { name: "Chennai", areas: [{ name: "T Nagar", pincode: 600017 }, { name: "Velachery", pincode: 600042 }] },
//         { name: "Coimbatore", areas: [{ name: "RS Puram", pincode: 641002 }, { name: "Gandhipuram", pincode: 641012 }] }
//     ]},
//     { state: "Telangana", cities: [
//         { name: "Hyderabad", areas: [{ name: "Banjara Hills", pincode: 500034 }, { name: "Madhapur", pincode: 500081 }] },
//         { name: "Warangal", areas: [{ name: "Hanamkonda", pincode: 506001 }, { name: "Kazipet", pincode: 506003 }] }
//     ]},
//     { state: "Tripura", cities: [
//         { name: "Agartala", areas: [{ name: "Banamalipur", pincode: 799001 }, { name: "Indranagar", pincode: 799006 }] },
//         { name: "Udaipur", areas: [{ name: "Matabari", pincode: 799013 }, { name: "Radhakishorepur", pincode: 799120 }] }
//     ]},
//     { state: "Uttar Pradesh", cities: [
//         { name: "Lucknow", areas: [{ name: "Gomti Nagar", pincode: 226010 }, { name: "Hazratganj", pincode: 226001 }] },
//         { name: "Kanpur", areas: [{ name: "Civil Lines", pincode: 208001 }, { name: "Kidwai Nagar", pincode: 208011 }] }
//     ]},
//     { state: "Uttarakhand", cities: [
//         { name: "Dehradun", areas: [{ name: "Rajpur Road", pincode: 248001 }, { name: "Clock Tower", pincode: 248001 }] },
//         { name: "Haridwar", areas: [{ name: "Jwalapur", pincode: 249407 }, { name: "BHEL", pincode: 249403 }] }
//     ]},
//     { state: "West Bengal", cities: [
//         { name: "Kolkata", areas: [{ name: "Salt Lake", pincode: 700091 }, { name: "Park Street", pincode: 700016 }] },
//         { name: "Siliguri", areas: [{ name: "Pradhan Nagar", pincode: 734003 }, { name: "Hakim Para", pincode: 734001 }] }
//     ]}
// ];

// async function seedDatabase() {
//     try {
//         await mongoose.connect(MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log("✅ MongoDB Connected");

//         for (const stateData of data) {
//             let state = await State.findOne({ name: stateData.state });
//             if (!state) {
//                 state = new State({ name: stateData.state });
//                 await state.save();
//                 console.log(`🛡 State added: ${state.name}`);
//             }

//             for (const cityData of stateData.cities) {
//                 let city = await City.findOne({ name: cityData.name, stateId: state._id });
//                 if (!city) {
//                     city = new City({ name: cityData.name, stateId: state._id });
//                     await city.save();
//                     console.log(`🏙 City added: ${city.name} in ${state.name}`);
//                 }

//                 for (const areaData of cityData.areas) {
//                     let area = await Area.findOne({
//                         name: areaData.name,
//                         cityId: city._id,
//                         stateId: state._id
//                     });
//                     if (!area) {
//                         area = new Area({
//                             name: areaData.name,
//                             cityId: city._id,
//                             stateId: state._id,
//                             pincode: areaData.pincode
//                         });
//                         await area.save();
//                         console.log(`📍 Area added: ${area.name} (${area.pincode}) in ${city.name}`);
//                     }
//                 }
//             }
//         }

//         console.log("🎉 All data inserted successfully!");
//         mongoose.connection.close();
//     } catch (err) {
//         console.error("❌ Error inserting data:", err);
//         mongoose.connection.close();
//     }
// }

// seedDatabase();


