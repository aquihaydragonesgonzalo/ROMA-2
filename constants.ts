import { Activity, Pronunciation, Coordinates } from './types';

export const SHIP_ARRIVAL_TIME = "07:00";
export const SHIP_DEPARTURE_TIME = "19:00";
export const SHIP_ONBOARD_TIME = "18:30";
export const DATE_OF_VISIT = "2026-04-16";

// Coordenadas exactas del GPX y Waypoints
export const COORDS = {
  SHUTTLE_CRUCERO: { lat: 42.097499, lng: 11.788778 },
  ESTACION_CIVITAVECCHIA: { lat: 42.087946, lng: 11.7983 },
  PARADA_AUTOBUS: { lat: 42.096385, lng: 11.789507 },
  ROMA_TERMINI: { lat: 41.9009, lng: 12.5020 },
  METRO_COLOSSEO: { lat: 41.891277, lng: 12.491309 },
  COLISEO: { lat: 41.890246, lng: 12.492374 },
  ARCO_CONSTANTINO: { lat: 41.889756, lng: 12.490657 },
  VISTA_FORO: { lat: 41.891274, lng: 12.490416 },
  ESCALERAS_CAMPIDOGLIO: { lat: 41.89401, lng: 12.483923 },
  LOBA_CAPITULINA: { lat: 41.893287, lng: 12.483649 },
  CAMPIDOGLIO: { lat: 41.893317, lng: 12.48293 },
  COLOSO_CONSTANTINO: { lat: 41.892406, lng: 12.481458 },
  VICTOR_MANUEL: { lat: 41.89543, lng: 12.482704 },
  COLUMNA_TRAJANO: { lat: 41.89581, lng: 12.48427 },
  FONTANA_TREVI: { lat: 41.900936, lng: 12.483303 },
  PARTHEON: { lat: 41.899009, lng: 12.476792 },
  PLAZA_NAVONA: { lat: 41.89916, lng: 12.473091 },
  PUENTE_S_ANGELO: { lat: 41.901901, lng: 12.466464 },
  CASTILLO_S_ANGELO: { lat: 41.902643, lng: 12.466393 },
  PLAZA_SAN_PEDRO: { lat: 41.902258, lng: 12.458279 },
  ESTACION_SAN_PIETRO: { lat: 41.896275, lng: 12.454727 }
};

// Track real de 4km extraído del GPX
export const ROMA_TRACK: [number, number][] = [
  [41.891218, 12.491383], [41.891155, 12.491916], [41.891097, 12.491915], [41.891072, 12.491915], [41.890944, 12.491915], [41.890966, 12.492103], [41.890971, 12.492242], [41.890964, 12.492358], [41.890942, 12.49252], [41.890906, 12.492744], [41.890846, 12.492954], [41.890749, 12.493175], [41.890571, 12.493529], [41.890501, 12.493629], [41.890429, 12.493694], [41.890307, 12.493741], [41.89016, 12.493717], [41.889967, 12.493622], [41.889848, 12.493564], [41.889879, 12.493453], [41.889834, 12.49337], [41.889742, 12.493263], [41.889634, 12.493107], [41.889568, 12.492974], [41.889523, 12.492806], [41.889471, 12.49242], [41.889487, 12.492192], [41.889472, 12.491963], [41.88952, 12.491793], [41.889599, 12.491572], [41.889613, 12.491548], [41.889739, 12.491349], [41.889867, 12.491208], [41.890029, 12.491132], [41.890183, 12.491101], [41.890307, 12.491094], [41.890431, 12.491109], [41.89051, 12.491131], [41.890649, 12.491204], [41.890763, 12.491309], [41.890837, 12.491412], [41.890885, 12.491499], [41.890913, 12.491437], [41.890913, 12.491437], [41.890922, 12.49142], [41.89099, 12.491177], [41.891059, 12.490929], [41.891098, 12.490779], [41.891203, 12.490416], [41.891262, 12.490453], [41.891285, 12.490382], [41.891319, 12.490307], [41.891614, 12.489782], [41.89175, 12.489541], [41.891777, 12.489494], [41.892009, 12.489079], [41.892476, 12.488249], [41.892494, 12.488267], [41.892538, 12.48831], [41.892713, 12.487955], [41.892929, 12.487574], [41.892965, 12.487492], [41.892991, 12.487407], [41.893042, 12.487289], [41.893077, 12.487226], [41.893161, 12.487074], [41.893291, 12.486887], [41.89347, 12.486677], [41.893734, 12.486316], [41.893883, 12.486048], [41.894083, 12.485696], [41.894604, 12.484746], [41.894515, 12.48461], [41.894516, 12.484606], [41.894515, 12.48461], [41.894279, 12.484288], [41.894211, 12.484232], [41.894167, 12.484212], [41.894083, 12.484188], [41.894039, 12.484183], [41.894036, 12.484165], [41.894024, 12.484055], [41.894017, 12.483988], [41.89401, 12.483921], [41.893775, 12.483897], [41.89372, 12.483872], [41.893655, 12.483823], [41.893482, 12.483648], [41.893393, 12.483578], [41.893391, 12.483576], [41.893417, 12.483511], [41.893418, 12.483493], [41.893408, 12.483471], [41.893356, 12.483432], [41.893306, 12.483236], [41.893261, 12.483061], [41.893221, 12.483007], [41.893206, 12.482927], [41.893225, 12.482857], [41.89327, 12.482804], [41.893328, 12.482789], [41.89331, 12.482641], [41.893291, 12.482477], [41.893255, 12.482428], [41.893198, 12.482366], [41.893091, 12.48224], [41.892987, 12.482104], [41.892818, 12.481859], [41.892648, 12.481544], [41.892584, 12.481452], [41.892547, 12.481412], [41.892489, 12.481431], [41.892448, 12.481444], [41.892489, 12.481431], [41.892547, 12.481412], [41.892584, 12.481452], [41.892648, 12.481544], [41.892818, 12.481859], [41.892987, 12.482104], [41.893091, 12.48224], [41.893198, 12.482366], [41.893255, 12.482428], [41.893291, 12.482477], [41.89331, 12.482641], [41.893378, 12.482629], [41.893403, 12.482634], [41.89345, 12.482661], [41.893472, 12.482612], [41.893776, 12.48196], [41.89378, 12.481954], [41.893821, 12.481986], [41.893838, 12.481984], [41.893862, 12.481982], [41.893941, 12.481987], [41.893943, 12.481997], [41.894316, 12.482148], [41.894525, 12.482249], [41.894551, 12.482245], [41.894583, 12.482271], [41.894605, 12.482303], [41.894624, 12.482274], [41.894649, 12.482263], [41.894655, 12.482283], [41.894913, 12.482179], [41.894952, 12.482167], [41.894988, 12.482166], [41.895044, 12.482169], [41.895083, 12.482181], [41.895154, 12.482218], [41.895183, 12.482242], [41.895241, 12.482312], [41.895287, 12.482403], [41.8953, 12.482443], [41.895337, 12.482433], [41.895365, 12.482447], [41.895374, 12.482461], [41.895397, 12.482556], [41.895441, 12.482741], [41.895472, 12.482871], [41.895496, 12.482968], [41.895493, 12.483003], [41.89551, 12.48301], [41.895556, 12.483025], [41.895727, 12.483108], [41.895742, 12.483115], [41.895753, 12.483076], [41.895766, 12.483057], [41.895965, 12.482962], [41.895974, 12.482994], [41.895985, 12.482988], [41.896012, 12.482973], [41.896041, 12.482957], [41.896053, 12.482951], [41.896047, 12.482929], [41.896099, 12.482902], [41.896639, 12.482657], [41.896665, 12.48266], [41.896715, 12.482956], [41.89677, 12.48335], [41.896777, 12.483385], [41.896884, 12.483348], [41.897037, 12.483359], [41.897111, 12.48334], [41.897656, 12.483081], [41.898438, 12.482743], [41.898603, 12.483157], [41.899264, 12.482985], [41.900185, 12.482578], [41.900438, 12.482469], [41.900481, 12.48245], [41.900509, 12.482481], [41.900567, 12.482722], [41.900724, 12.483129], [41.900713, 12.483133], [41.900724, 12.483129], [41.900567, 12.482722], [41.900509, 12.482481], [41.900481, 12.48245], [41.900433, 12.482309], [41.900327, 12.481816], [41.900132, 12.480897], [41.900112, 12.480804], [41.900068, 12.480823], [41.900063, 12.480791], [41.900013, 12.48048], [41.899996, 12.48021], [41.899964, 12.479825], [41.899964, 12.479789], [41.899983, 12.479603], [41.899968, 12.47919], [41.89988, 12.478975], [41.899791, 12.4788], [41.899734, 12.478716], [41.899684, 12.478747], [41.89964, 12.478593], [41.899568, 12.478446], [41.899538, 12.478399], [41.899526, 12.478355], [41.899459, 12.477985], [41.899356, 12.477287], [41.899305, 12.477145], [41.899154, 12.477036], [41.899149, 12.47692], [41.899142, 12.476805], [41.899141, 12.47678], [41.899133, 12.476635], [41.899439, 12.476602], [41.899522, 12.476592], [41.899523, 12.476505], [41.89952, 12.476439], [41.899403, 12.47512], [41.899398, 12.475029], [41.899395, 12.474837], [41.899394, 12.474063], [41.899393, 12.474049], [41.899393, 12.474014], [41.899392, 12.473993], [41.899387, 12.473856], [41.899385, 12.473791], [41.899384, 12.473779], [41.899142, 12.473804], [41.899123, 12.473395], [41.899117, 12.473313], [41.899112, 12.47325], [41.899172, 12.473037], [41.899209, 12.47291], [41.899206, 12.472847], [41.899811, 12.472797], [41.899805, 12.472696], [41.899803, 12.472246], [41.899829, 12.472245], [41.899953, 12.47225], [41.899983, 12.472183], [41.900078, 12.47214], [41.900229, 12.472126], [41.900453, 12.472128], [41.900462, 12.472084], [41.900469, 12.471939], [41.900477, 12.471738], [41.900478, 12.471615], [41.900474, 12.471325], [41.900477, 12.470922], [41.900476, 12.470898], [41.900477, 12.470845], [41.900481, 12.470659], [41.900481, 12.470625], [41.900478, 12.470198], [41.900486, 12.469834], [41.900504, 12.469499], [41.900508, 12.469427], [41.900527, 12.469011], [41.900527, 12.468963], [41.900538, 12.468503], [41.900535, 12.468172], [41.900548, 12.467653], [41.900554, 12.467504], [41.900555, 12.467415], [41.900555, 12.467373], [41.900701, 12.467216], [41.900738, 12.467178], [41.90113, 12.466787], [41.901134, 12.466717], [41.901123, 12.466573], [41.901121, 12.466521], [41.901212, 12.466521], [41.901234, 12.466519], [41.901281, 12.466516], [41.901316, 12.466513], [41.901327, 12.466513], [41.901724, 12.466478], [41.902457, 12.466414], [41.902468, 12.466412], [41.902513, 12.46641], [41.90251, 12.466367], [41.902483, 12.465836], [41.902431, 12.465426], [41.902407, 12.465068], [41.902404, 12.464867], [41.902399, 12.464406], [41.902396, 12.464293], [41.902395, 12.464253], [41.902394, 12.464233], [41.902381, 12.463632], [41.902368, 12.463075], [41.902365, 12.462948], [41.90236, 12.462761], [41.902337, 12.462014], [41.902335, 12.461947], [41.902308, 12.460904], [41.902303, 12.460697], [41.902301, 12.460609], [41.902281, 12.459678], [41.902279, 12.459619], [41.902269, 12.459187], [41.902268, 12.459173], [41.902264, 12.458794], [41.902258, 12.45838], [41.902257, 12.458365], [41.902256, 12.458352], [41.902256, 12.458275], [41.902055, 12.458268], [41.901938, 12.458245], [41.901819, 12.458201], [41.901795, 12.458192], [41.901737, 12.458163], [41.90165, 12.458113], [41.901537, 12.458014], [41.901436, 12.457898], [41.90136, 12.45776], [41.901299, 12.457607], [41.90127, 12.457469], [41.901257, 12.457222], [41.901275, 12.457055], [41.901327, 12.456888], [41.901379, 12.456762], [41.901308, 12.456693], [41.901302, 12.45669], [41.901249, 12.456577], [41.901214, 12.456543], [41.901176, 12.456515], [41.901115, 12.456495], [41.900826, 12.456522], [41.900802, 12.456512], [41.900689, 12.456513], [41.900583, 12.456513], [41.900473, 12.456508], [41.900396, 12.456505], [41.900387, 12.456504], [41.900297, 12.456494], [41.900107, 12.45645], [41.900078, 12.456441], [41.900027, 12.456424], [41.899926, 12.456381], [41.899838, 12.456344], [41.899737, 12.456298], [41.899634, 12.456256], [41.89961, 12.456243], [41.899572, 12.456225], [41.899532, 12.456198], [41.899377, 12.456013], [41.899365, 12.455925], [41.899379, 12.455893], [41.899371, 12.455884], [41.899335, 12.455849], [41.899315, 12.455882], [41.899228, 12.455892], [41.899187, 12.455874], [41.899045, 12.455652], [41.898909, 12.455486], [41.898753, 12.455336], [41.898579, 12.455191], [41.898504, 12.455147], [41.898501, 12.45509], [41.898491, 12.454882], [41.898478, 12.454813], [41.897927, 12.455007], [41.897891, 12.454929], [41.897841, 12.454815], [41.897562, 12.454195], [41.897455, 12.453956], [41.897429, 12.453897], [41.896645, 12.454792], [41.896596, 12.454715], [41.896554, 12.454656], [41.896523, 12.454637], [41.896495, 12.454634], [41.896473, 12.454641], [41.896433, 12.454677], [41.896394, 12.454618], [41.89629, 12.454744]
];

export const INITIAL_ITINERARY: Activity[] = [
  {
    id: '0', title: 'Llegada a Puerto', startTime: '07:00', endTime: '07:00',
    locationName: 'Civitavecchia', coords: { lat: 42.0925, lng: 11.7900 },
    description: 'Atraco del barco en Civitavecchia. Prepárate para desembarcar inmediatamente.',
    keyDetails: 'Tip: Sé de los primeros en la fila de salida (cubierta 0) a las 07:15.',
    priceEUR: 0, type: 'logistics', completed: false
  },
  {
    id: '1', title: 'Shuttle a Largo della Pace', startTime: '07:15', endTime: '07:40',
    locationName: 'Muelle', endLocationName: 'Shuttle Crucero',
    coords: { lat: 42.0925, lng: 11.7900 }, endCoords: COORDS.SHUTTLE_CRUCERO,
    description: 'Tomamos el Shuttle Bus gratuito desde el pie del barco hasta el centro de servicios.',
    keyDetails: 'Punto de llegada oficial: Largo della Pace.',
    priceEUR: 0, type: 'transport', completed: false,
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=42.097499,11.788778'
  },
  {
    id: '2', title: 'Bus y Ticket BIRG', startTime: '08:09', endTime: '08:16',
    locationName: 'Largo della Pace', endLocationName: 'Estación FFCC',
    coords: COORDS.SHUTTLE_CRUCERO, endCoords: COORDS.ESTACION_CIVITAVECCHIA,
    description: 'Bus urbano a la estación. Compra el ticket BIRG (5 Zonas - 12€).',
    keyDetails: '¡VALÍDALO! Cubre Tren RV, Metro y Bus en Roma todo el día.',
    priceEUR: 12, type: 'transport', completed: false, notes: 'CRITICAL',
    mapsLink: 'https://maps.app.goo.gl/SzLRBrf1v8aCd9AEA'
  },
  {
    id: '3', title: 'Tren a Roma Termini', startTime: '08:36', endTime: '09:48',
    locationName: 'Estación Civitavecchia', endLocationName: 'Roma Termini',
    coords: COORDS.ESTACION_CIVITAVECCHIA, endCoords: COORDS.ROMA_TERMINI,
    description: 'Trayecto en tren Regional Veloce (RV).',
    keyDetails: 'Siéntate a la derecha en el sentido de la marcha para ver el mar.',
    priceEUR: 0, type: 'transport', completed: false,
    mapsLink: 'https://maps.app.goo.gl/wUAfb2GrBFxfGxDU8',
    warning: 'Si pierdes este tren, el siguiente es a las 08:58 (Pérdida de visita: 22 min).'
  },
  {
    id: '4', title: 'Metro al Coliseo', startTime: '10:00', endTime: '10:10',
    locationName: 'Roma Termini', endLocationName: 'Colosseo',
    coords: COORDS.ROMA_TERMINI, endCoords: COORDS.METRO_COLOSSEO,
    description: 'Metro B (Azul) dirección LAURENTINA. 2 paradas.',
    keyDetails: 'Bajar en la estación COLOSSEO. Intervalo reducido en Termini.',
    priceEUR: 0, type: 'transport', completed: false,
    mapsLink: 'https://maps.app.goo.gl/XPKXKzmMi7PTQC9d6'
  },
  {
    id: '5', title: 'Coliseo y Arco', startTime: '10:10', endTime: '10:55',
    locationName: 'Colosseo', coords: COORDS.COLISEO,
    description: 'Vista exterior del Coliseo y Arco de Constantino.',
    keyDetails: 'La mejor foto es desde la salida del metro, subiendo por Via Nicola Salvi.',
    priceEUR: 0, type: 'sightseeing', completed: false,
    mapsLink: 'https://www.google.com/maps/dir/Colosseo/Arco+di+Costantino'
  },
  {
    id: '6', title: 'Campidoglio y Vittorio', startTime: '10:55', endTime: '12:00',
    locationName: 'Plaza del Campidoglio', coords: COORDS.CAMPIDOGLIO,
    description: 'Subida al Campidoglio por Via dei Fori Imperiali.',
    keyDetails: '¡Tiempo extra ganado! Visita relajada a la Loba Capitolina y Foros.',
    priceEUR: 0, type: 'sightseeing', completed: false,
    mapsLink: 'https://www.google.com/maps/dir/Arco+di+Costantino/Piazza+del+Campidoglio/Altare+della+Patria'
  },
  {
    id: '7', title: 'Fontana di Trevi', startTime: '12:00', endTime: '12:45',
    locationName: 'Trevi', coords: COORDS.FONTANA_TREVI,
    description: 'Lanzamiento de moneda. ¡Respeta las nuevas normas de aforo!',
    keyDetails: 'Aforo 400 personas. Fila obligatoria. No sentarse ni comer.',
    priceEUR: 0, type: 'sightseeing', completed: false,
    mapsLink: 'https://www.google.com/maps/dir/Altare+della+Patria/Fontana+di+Trevi'
  },
  {
    id: '8', title: 'Panteón y Almuerzo', startTime: '12:45', endTime: '13:30',
    locationName: 'Panteón', coords: COORDS.PARTHEON,
    description: 'Vista exterior del Panteón y Plaza Navona. Almuerzo rápido.',
    keyDetails: '45 minutos para pizza al taglio and disfrutar del Panteón.',
    priceEUR: 15, type: 'food', completed: false,
    mapsLink: 'https://www.google.com/maps/dir/Fontana+di+Trevi/Pantheon/Piazza+Navona'
  },
  {
    id: '9', title: 'Castillo Sant\'Angelo y Vaticano', startTime: '13:30', endTime: '14:10',
    locationName: 'Castillo Sant\'Angelo', coords: COORDS.CASTILLO_S_ANGELO,
    description: 'Cruce del puente peatonal y caminata a San Pedro.',
    keyDetails: 'Vistas del Castillo y columnata de Bernini.',
    priceEUR: 0, type: 'sightseeing', completed: false,
    mapsLink: 'https://www.google.com/maps/dir/Piazza+Navona/Castel+Sant\'Angelo/Piazza+San+Pietro'
  },
  {
    id: '10', title: 'Regreso: Caminata a Roma S. Pietro', startTime: '14:10', endTime: '14:40',
    locationName: 'Plaza San Pedro', endLocationName: 'Estación Roma S. Pietro',
    coords: COORDS.PLAZA_SAN_PEDRO, endCoords: COORDS.ESTACION_SAN_PIETRO,
    description: 'Caminata estratégica hacia la estación de San Pietro.',
    keyDetails: 'Margen para llegar con calma al tren de las 15:02.',
    priceEUR: 0, type: 'logistics', completed: false, notes: 'CRITICAL',
    mapsLink: 'https://maps.app.goo.gl/ARmyPqFUrY95BSPe6'
  },
  {
    id: '11', title: 'Tren: Roma S. Pietro a Civitavecchia', startTime: '15:02', endTime: '16:02',
    locationName: 'Estación Roma S. Pietro', endLocationName: 'Civitavecchia',
    coords: COORDS.ESTACION_SAN_PIETRO, endCoords: COORDS.ESTACION_CIVITAVECCHIA,
    description: 'Tren regional de regreso. Trayecto directo a Civitavecchia.',
    keyDetails: 'BIRG válido para el regreso. ¡No pierdas este tren de las 15:02!',
    priceEUR: 0, type: 'transport', completed: false,
    mapsLink: 'https://maps.app.goo.gl/b4GdaEEcXcsXLvxB7',
    warning: 'Próximo tren: 15:35. Si se toma este, el margen de seguridad para la HORA LÍMITE DE EMBARQUE (18:30) se reduce a 1h 55m.'
  },
  {
    id: '12', title: 'Traslado Final al Barco', startTime: '16:05', endTime: '17:00',
    locationName: 'Civitavecchia', coords: { lat: 42.0925, lng: 11.7900 },
    description: 'Bus local o caminata al punto de Shuttle.',
    keyDetails: 'Margen de seguridad amplio antes del límite de embarque.',
    priceEUR: 0, type: 'logistics', completed: false
  },
  {
    id: '13', title: 'Hora Límite de Embarque', startTime: '18:30', endTime: '18:30',
    locationName: 'Crucero', coords: { lat: 42.0925, lng: 11.7900 },
    description: 'Límite máximo para estar físicamente a bordo del barco.',
    keyDetails: '¡NO TE RETRASES! El barco no espera.',
    priceEUR: 0, type: 'logistics', completed: false, notes: 'CRITICAL'
  },
  {
    id: '14', title: 'Salida de Puerto', startTime: '19:00', endTime: '19:00',
    locationName: 'Puerto Civitavecchia', coords: { lat: 42.0925, lng: 11.7900 },
    description: 'El crucero zarpa hacia su próximo destino.',
    keyDetails: 'Despedida de Roma desde la cubierta.',
    priceEUR: 0, type: 'logistics', completed: false
  }
];

export const PRONUNCIATIONS: Pronunciation[] = [
  { word: 'Buongiorno', phonetic: '/bwɔnˈdʒorno/', simplified: 'Buon-yor-no', meaning: 'Buenos días' },
  { word: 'Grazie', phonetic: '/ˈɡrattsje/', simplified: 'Gra-tsie', meaning: 'Gracias' },
  { word: 'Dov\'è la estación?', phonetic: '/doˈvɛ la statˈtsjone/', simplified: 'Do-ve la sta-tsio-ne', meaning: '¿Dónde está la estación?' },
  { word: 'Al banco', phonetic: '/al ˈbaŋko/', simplified: 'Al ban-ko', meaning: 'En la barra (más barato)' },
  { word: 'BIRG', phonetic: '/birɡ/', simplified: 'BIRG', meaning: 'Billete Regional' }
];