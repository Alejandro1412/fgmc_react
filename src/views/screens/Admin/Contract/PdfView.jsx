//Packages
import React from "react";
import PropTypes from "prop-types";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  BlobProvider,
} from "@react-pdf/renderer";
import dayjs from "dayjs";

//Icons/Assets
import { BiArrowBack } from "react-icons/bi";

//Components
import { Button } from "@mui/material";

//Hooks
import useStrings from "../../../../strings";

// Create styles
const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    textAlign: "justify",
  },
  section: {
    padding: 10,
    textAlign: "center",
  },
  sectionTwoColumns: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,
  },
  dataFirmas: {
    padding: 15,
  },
});

const PdfView = (props) => {
  const { handleChangeScreen, screenActive } = props;
  const data = screenActive.data;

  const { useConstants } = useStrings();
  const { TYPE_CONTRACTS } = useConstants();

  const dateInJsFechaIngreso = new Date(data.fechaIngreso);
  const dateInJsFechaFin = new Date(data.fechaRetiro);
  const dateInJsFechaNacimiento = new Date(data.fechaNacimiento);

  const documentToViewAndDownload = () => {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>
              CONTRATO:{" "}
              <span className="font-semibold uppercase">
                {" "}
                {TYPE_CONTRACTS[data.nombreContrato]}
              </span>{" "}
              FUNDACION FGMC POPAYAN{" "}
            </Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>NOMBRE EMPLEADOR:</Text>
            <Text>FUNDACION GIMNASIO MODERNO DEL CAUCA</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>REPRESENTANTE LEGAL:</Text>
            <Text>LUIS ARMANDO ORTIZ ARGOTE</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>DOMICILIO EMPLEADOR:</Text>
            <Text className="uppercase">
              CRA 5 NO. 48N-60 CICLOVIA POPAY??N CAUCA
            </Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>NOMBRE DEL TRABAJADOR:</Text>
            <Text>{data.nombreEmpleado}</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>DIRECCI??N TRABAJADOR:</Text>
            <Text>{data.direccion}</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>IDENTIFICACI??N:</Text>
            <Text>1061798713</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>LUGAR Y FECHA DE NACIMIENTO</Text>
            <Text>
              {data.lugarExpedicion} -
              {dayjs(dateInJsFechaNacimiento).format("MMM DD YYYY")}
            </Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>NACIONALIDAD DEL TRABAJADOR</Text>
            <Text>COLOMBIANO</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>TRABAJO A DESEMPE??AR</Text>
            <Text>{data.cargo}</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>SALARIO</Text>
            <Text>{data.salario}</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>AUXILIO DE TRANSPORTE DE LEY</Text>
            <Text>{data.auxilioporTransporte}</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>PERIODO DE PAGO</Text>
            <Text>MENSUAL</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>LUGAR DE TRABAJO</Text>
            <Text>CARRERA 5 NO. 48N-60</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>FECHA INICIO LABORES</Text>
            <Text>{dayjs(dateInJsFechaIngreso).format("MMM DD YYYY")}</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>FECHA TERMINACI??N </Text>
            <Text>{dayjs(dateInJsFechaFin).format("MMM DD YYYY")}</Text>
          </View>
          <View style={styles.section}>
            <Text>
              Entre los suscritos a saber LUIS ARMANDO ORTIZ ARGOTE,
              identificado(a) con C??dula de Ciudadan??a No. 12.957.715 de Pasto
              (Nari??o), quien act??a en calidad de representante legal de la
              FUNDACI??N GIMNASIO MODERNO DEL CAUCA, quien para efectos del
              presente contrato de denominar?? el empleador y por otra parte el
              trabajador de las condiciones ya dichas, identificados como
              aparece al pie de sus firmas, se ha celebrado el presente contrato
              individual de trabajo, regido adem??s por las siguientes cl??usulas:
              PRIMERA.- Objeto: El empleador contrata los servicios personales
              del trabajador y ??ste se obliga: a) A poner al servicio del
              empleador toda su capacidad normal de trabajo, en forma exclusiva
              en el desempe??o de las funciones propias del oficio mencionado y
              en las labores anexas y complementarias del mismo, de conformidad
              con las ??rdenes e instrucciones que le imparta el empleador o sus
              representantes, y b) A no prestar directa ni indirectamente
              servicios laborales a otros empleadores, ni a trabajar por cuenta
              propia en el mismo oficio, durante la vigencia de este contrato.
              SEGUNDA.- Las partes declaran que en el presente contrato se
              entienden incorporadas, en lo pertinente, las disposiciones
              legales que regulan las relaciones entre la Fundaci??n y sus
              trabajadores, en especial, las del contrato de trabajo para el
              oficio que se suscribe, fuera de las obligaciones consignadas en
              los reglamentos de trabajo y de Higiene y Seguridad Industrial de
              la Fundaci??n. PARAGRAFO: Dar cumplimiento a lo estipulado en la
              normatividad legal vigente en materia de seguridad y salud en el
              trabajo en cuanto a deberes y responsabilidades de los empleados y
              contratistas, en especial en lo atinente a: 1. Gesti??n del riesgo
              y plan de prevenci??n, preparaci??n y respuesta ante emergencias.(
              Decreto 1072 de 2015 art. 2.2.4.6.25, ley 1523 de 2012, resoluci??n
              1016 de 1989): El trabajador debe hacer parte de la brigada de
              emergencias si as?? se le designa por parte del empleador o
              representante del mismo. El trabajador debe asistir a los
              programas de formaci??n de prevenci??n preparaci??n y respuesta ante
              emergencias y de primeros auxilios que establezca el empleador o
              contratante por cuenta propia o a trav??s de los servicios de apoyo
              de la ARL. 2. comit?? de seguridad y salud en el trabajo COPASST
              (resoluci??n 2013 de 1986): el trabajador debe hacer parte del
              comit?? paritario de seguridad y salud en el trabajo COPASST si as??
              es designado por el empleador o representante de este. 3. comit??
              de convivencia laboral (resoluci??n 652 de 2012; resoluci??n 1356 de
              2012): el trabajador debe hacer parte del comit?? de convivencia
              laboral si as?? se le designa por parte del empleador o
              representante de este. 4. comit?? de gesti??n del riesgo (ley 1523
              de 2012): el trabajador debe hacer parte del comit?? de gesti??n del
              riesgo si as?? se le designa. 5. gesti??n de la seguridad y salud en
              el trabajo en su sitio de trabajo (decreto 1072 de 2015 capitulo
              6, articulo 2.2.4.6.10): El trabajador debe realizar las
              inspecciones peri??dicas de seguridad de su sitio de trabajo en el
              marco del protocolo de seguridad y lista de chequeo establecido
              para tal fin y reportar sus hallazgos oportunamente as?? como
              gestionar la seguridad y salud de su sitio de trabajo. El
              trabajador debe generar todos los registros que le sean encargados
              acorde a los formatos establecidos para el funcionamiento del
              SGSST, el trabajador debe asistir a todas las capacitaciones de
              seguridad y salud en el trabajo entendiendo a estas como un
              requisito legal y laboral. Cuando por alguna circunstancia el
              trabajador se debe ausentar de las actividades de seguridad y
              salud en el trabajo, deber?? reportarlo oportunamente y soportarlo
              acorde lo establecido en la ley vigente como causales de ausencia
              justificada a la labor contratada. 6. accidente laboral (ley 1562
              de 2012, resoluci??n 1401 de 2007): En el caso de presentarse un
              accidente laboral, el trabajador deber?? reportarlo oportunamente
              seg??n lo establecido en el marco legal aplicable de 2 d??as
              h??biles. El trabajador deber?? asistir a las citaciones que con el
              prop??sito de la investigaci??n del accidente laboral, le sean
              emitidas por la empresa, ARL o el ministerio de trabajo cuando
              haya lugar. El trabajador est?? obligado a suministrar la
              documentaci??n necesaria para la gesti??n de las incapacidades que
              se generen a consecuencia de un accidente laboral o enfermedad
              laboral por parte del empleador o contratante. 7. enfermedad
              laboral (ley 1562 de 2012; resoluci??n 1111 de 2017): En caso de
              realiz??rsele la calificaci??n en primera instancia de enfermedad
              laboral, el trabajador debe reportar oportunamente al empleador o
              contratante al respecto con el prop??sito de que se d?? inicio al
              proceso que para tal prop??sito determina el marco legal vigente
              aplicable. 8. elementos de protecci??n personal si aplica ( ley 9
              de 1979; resoluci??n 2400 de 1979): El trabajador debe hacer uso
              racional y adecuado de sus elementos de protecci??n personal en
              coherencia con su funci??n contratada. 9. medicina preventiva y del
              trabajo (DUR 1072 de 2015, ley 1562 de 2012, resoluci??n 1016 de
              1989): El trabajador debe asistir a todas las actividades que sean
              programadas en el marco de la medicina preventiva y del trabajo,
              incluidas las valoraciones medico ocupacionales, tamizajes de
              salud, campa??as de salud, y dem??s que sean aplicables acorde a los
              prop??sitos de la promoci??n de salud y la prevenci??n de la
              enfermedad en los sitios de trabajo. 10. ausentismo de actividades
              de seguridad y salud en el trabajo (c??digo sustantivo del trabajo
              y normatividad relacionada):El trabajador que por cualquier
              circunstancia requiera o deba ausentarse de las actividades de
              seguridad y salud en el trabajo deber?? soportarlo acorde a lo
              establecido en el marco legal aplicable vigente, so pena de
              nivelarse o reprogramarse las actividades con los ausentes cuando
              as?? se le requiera y con el prop??sito de dar cumplimiento a los
              objetivos del SGSST en el marco de la normatividad legal vigente
              aplicable. 11. gesti??n documental del sistema de gesti??n de
              seguridad y salud en el trabajo ( DUR 1072 art 2.2.4.6.10 numeral
              6, Con el prop??sito de participar y contribuir al cumplimiento de
              los objetivos y del SGSST, los trabajadores deber??n ayudar a la
              elaboraci??n de procesos y procedimientos documentados, gu??as,
              protocolos y relacionados que sean aplicables de acuerdo a su
              cargo y conocimientos y que le sean de utilidad para fortalecer el
              SGSST desde cada uno de sus puestos de trabajo y que ayuden en la
              prevenci??n de accidentes y enfermedades laborales. 12. rendici??n
              de cuentas decreto 1072 de 2015 Art. 2.2.4.6.8. Numeral 3. : todos
              los trabajadores que le hayan sido asignadas responsabilidades
              dentro del sistema de gesti??n de seguridad y salud en el trabajo
              deber??n rendir cuentas al interior de la organizaci??n de
              conformidad con el marco legal vigente aplicable, esto incluye
              generaci??n de informes y registros, as?? como asistir a las
              reuniones que para tal prop??sito cite la representaci??n legal,
              ??rea de seguridad y salud en el trabajo o los entes de inspecci??n
              vigilancia y control en materia como la ARL y el Ministerio del
              Trabajo TERCERA.- En relaci??n con la actividad propia del
              trabajador, ??ste la ejecutar?? dentro de las siguientes modalidades
              que implican claras obligaciones para el mismo trabajador as??: -
              Prestar el Servicio de Vigilancia en horario desde 6:00 a.m hasta
              las 2:00 p.m.; - Mantener cerrada la Puerta principal; - Prohibido
              entregar elementos de la Fundaci??n sin la debida autorizaci??n; -
              Responder por los archivos, equipos, muebles y enseres de la
              Fundaci??n; - Prestarle Seguridad a las instalaciones de la
              Fundaci??n; Controlar la entrada y salida de personas, veh??culos y
              objetos de la Fundaci??n; - Estar pendiente del mantenimiento,
              Avisos, l??mparas, da??os en ba??os u otro servicio e imponer orden
              en las personas que solicitan informaci??n; - Direccionar las
              llamadas que entren por la porter??a a las dependencias; -
              Resguardar las instalaciones y personas que est??n dentro de la
              Fundaci??n; ??? Garantizar que en desarrollo de su trabajo, utilizar??
              todos los elementos e indumentaria propia de las funciones que le
              correspondan acorde a los protocolos de limpieza y desinfecci??n y
              de seguridad y salud en el trabajo - desarrollar las acciones
              necesarias, para asegurar la limpieza, desinfecci??n de espacios,
              mobiliario - realizar las acciones necesarias para el adecuado
              manejo de residuos s??lidos - detectar y dar alertas sobre plagas y
              vectores en el espacio donde se presta el servicio; - Realizar
              mantenimiento en las zonas verdes y servicio de jardiner??a;
              Reportar las anomal??as detectadas en sus turno e informar
              oportunamente de las mismas; - Acatar ??rdenes de las Directivas de
              la Fundaci??n; - Realizar tareas que le sean asignadas por su jefe
              inmediato y as?? garantizar un trabajo de calidad. - Observar
              rigurosamente las normas que le fije la Fundaci??n para la
              realizaci??n de la labor a que se refiere el presente contrato. ???
              Guardar absoluta reserva, salvo autorizaci??n expresa de la
              Fundaci??n, de todas aquellas informaciones que lleguen a su
              conocimiento, en raz??n de su trabajo, y que sean por naturaleza
              privadas. ??? Ejecutar por si mismo las funciones asignadas y
              cumplir estrictamente las instrucciones que le sean dadas por la
              Fundaci??n, o por quienes la representen, respecto del desarrollo
              de sus actividades. ??? Cuidar permanentemente los intereses de la
              Fundaci??n. ??? Dedicar la totalidad de su jornada de trabajo a
              cumplir a cabalidad con sus funciones. ??? Programar diariamente su
              trabajo y asistir puntualmente a las reuniones que efect??e la
              Fundaci??n a las cuales hubiere sido citado. ??? Observar completa
              armon??a y comprensi??n con los Padres de familia, estudiantes, con
              sus superiores y compa??eros de trabajo, en sus relaciones
              personales y en la ejecuci??n de su labor; igualmente queda
              totalmente prohibido tener relaciones amorosas con sus compa??eros
              de trabajo. ??? Cumplir permanentemente con esp??ritu de lealtad,
              colaboraci??n y disciplina con la Fundaci??n. ??? Avisar oportunamente
              y por escrito, a la Fundaci??n todo cambio en su direcci??n,
              tel??fono o ciudad de residencia. CUARTA.- El empleador pagar?? al
              trabajador por la prestaci??n de sus servicios el salario indicado,
              pagadero en las oportunidades tambi??n se??aladas en la parte
              superior de este contrato. Dentro de este pago se encuentra
              incluida la remuneraci??n de los descansos dominicales y festivos
              de que tratan los cap??tulos I y II del t??tulo VII del Cogido
              Sustantivo del Trabajo. Se aclara y se conviene que en los casos
              en los que el trabajador devengue comisiones o cualquier otra
              modalidad de salario variable, el 82.5 % de dichos ingresos,
              constituye remuneraci??n ordinaria, y el 17.5 % restante est??
              destinado a remunerar el descanso en los d??as dominicales y
              festivos de que tratan los cap??tulos I y II del t??tulo VII del
              C??digo Sustantivo del Trabajo. PARAGRAFO: Las partes expresamente
              acuerdan que lo que reciba el trabajador o llegue a recibir en el
              futuro, adicional a su salario ordinario, ya sean beneficios o
              auxilios habituales u ocasionales, tales como: alimentaci??n,
              habitaci??n o vestuario, bonificaciones ocasionales o cualquier
              otra que reciba, durante la vigencia del contrato de trabajo, en
              dinero o en especie, no constituye salario. QUINTA.- Todo trabajo
              suplementario o en horas extras y todo trabajo en d??a domingo o
              festivo en los que legalmente debe concederse descanso, se
              remunerar?? conforme a la ley, as?? como los correspondientes
              recargos nocturnos. Para el reconocimiento y pago del trabajo
              suplementario, dominical o festivo el empleador o sus
              representantes deben autorizarlo previamente por escrito. Cuando
              la necesidad de este trabajo se presente de manera imprevista o
              inaplazable, deber?? ejecutarse y darse cuenta de ??l por escrito, a
              la mayor brevedad, al empleador o a sus representantes. El
              empleador, en consecuencia, no reconocer?? ning??n trabajo
              suplementario o en d??a de descanso legalmente obligatorio que no
              haya sido autorizado previamente o avisado inmediatamente, como
              queda dicho. SEXTA.- El trabajador se obliga a laborar la jornada
              ordinaria en los turnos y dentro de las horas se??aladas por el
              empleador, pudiendo hacer ??ste ajustes o cambios de horario cuando
              lo estime conveniente. Por el acuerdo expreso o t??cito de las
              partes, podr??n repartirse las horas de la jornada ordinaria en la
              forma prevista en el art??culo 164 del C??digo Sustantivo del
              Trabajo, modificado por el art??culo 23 de la Ley 50 de 1990,
              teniendo en cuenta que los tiempos de descanso ente las secciones
              de la jornada no se computan dentro de la misma, seg??n el art??culo
              167 ib??dem. As?? mismo el empleador y el trabajador podr??n acordar
              que la jornada semanal de cuarenta y ocho (48) horas se realice
              mediante jornadas diarias flexibles de trabajo, distribuidas en
              m??ximo seis (6) d??as a la semana con un (1) d??as de descanso
              obligatorio, que podr?? coincidir con el domingo. En ??ste, el
              n??mero de horas de trabajo diario podr?? repartirse de manera
              variable durante la respectiva semana y podr?? ser de m??nimo cuatro
              (4) horas continuas y hasta diez (10) horas diarias sin lugar a
              ning??n recargo por trabajo suplementario, cuando el n??mero de
              horas de trabajo no exceda el promedio de cuarenta y ocho (48)
              horas semanales dentro de la jornada ordinaria de 6:00 am a 10:00
              pm. Articulo 161 del c??digo Sustantivo del Trabajo literal d)
              Adicionado por el articulo 51 de la ley 789 de 2002 SEPTIMA.- Las
              partes acuerdan un periodo de prueba de sesenta (60) d??as que no
              es superior a la quinta parte del t??rmino inicial de este
              contrato, ni excede de dos meses. En caso de pr??rrogas o nuevo
              contrato entre las partes se entender?? que no hay nuevo per??odo de
              prueba. Durante este per??odo tanto el empleador como el trabajador
              podr??n terminar el contrato en cualquier momento, en forma
              unilateral, de conformidad con el art??culo 80 del C??digo
              Sustantivo del Trabajo. OCTAVA.- La duraci??n del presente contrato
              es la establecida en este documento. No obstante, si antes de la
              fecha de vencimiento del t??rmino estipulado, ninguna de las partes
              avisare por escrito a la otra su determinaci??n de no prorrogar el
              contrato, con una antelaci??n no inferior a treinta (30) d??as, ??ste
              se entender?? renovado por un per??odo igual al inicialmente pactado
              y as?? sucesivamente. NOVENA.- Son justa causas para dar por
              terminado unilateralmente este contrato por cualquiera de las
              partes, las enumeradas en el articulo 62 del C??digo Sustantivo del
              Trabajo modificado por el art??culo 7 del Decreto 2351 de 1965; y,
              adem??s por parte del empleador, las faltas que para el efecto se
              califiquen como graves en el espacio reservado para cl??usulas
              adicionales en el presente contrato y las establecidas en el
              Reglamento Interno de Trabajo. DECIMA.- Las partes podr??n convenir
              que el trabajo se preste en lugar distinto del inicialmente
              contratado, siempre que tales traslados no desmejoren las
              condiciones laborales o de remuneraci??n del trabajador, o
              impliquen perjuicios para ??l. Los gastos que se originen con el
              traslado ser??n cubiertos por el empleador de conformidad con el
              numeral 8 del art??culo 57 del C??digo Sustantivo del Trabajo. El
              trabajador se obliga a aceptar los cambios de oficio que decida el
              empleador dentro de su poder subordinante, siempre que se respeten
              las condiciones laborales del trabajador y no se le causen
              perjuicios. Todo ello sin que se afecten el honor, la dignidad y
              los derechos m??nimos del trabajador, de conformidad con el
              art??culo 23 literal b del C??digo Sustantivo del Trabajo,
              modificado por el art??culo 1 de la ley 50 de 1990. DECIMA
              PRIMERA.- Este contrato ha sido redactado estrictamente de acuerdo
              con la ley y la jurisprudencia y ser?? interpretado de buena fe y
              en consonancia con el C??digo Sustantivo del Trabajo cuyo objeto,
              definido en su art??culo 1??, es logar la justicia en las relaciones
              entre EMPLEADORES Y TRABAJADORES dentro de un esp??ritu de
              coordinaci??n econ??mica y equilibrio social. DECIMA SEGUNDA.- El
              presente contrato remplaza en su integridad y deja sin efecto
              alguno cualquiera otro contrato verbal o escrito celebrado entre
              las partes con anterioridad. Las modificaciones que se acuerden al
              presente contrato se anotar??n a continuaci??n de su texto. Para
              constancia se firma en dos ejemplares del mismo tenor y valor,
              ante testigos en la ciudad de Popay??n, Departamento del Cauca, a
              los (01) d??as del mes de Enero de Dos Mil Veinte (2020).
            </Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>LUIS ARMANDO ORTIZ ARGOTE</Text>
            <Text>{data.nombreEmpleado}</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>REPRESENTANTE LEGAL</Text>
            <Text>1061798713 {data.lugarExpedicion}</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>FUNDACION GIMNASIO MODERNO DEL CAUCA</Text>
            <Text>EMPLEADO</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>C.C.N?? 12.957.715 DE PASTO</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>EMPLEADOR</Text>
          </View>
          <View style={styles.section}>
            <Text>TESTIGOS</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>---------------------------------</Text>
            <Text>---------------------------------</Text>
          </View>
          <View style={styles.sectionTwoColumns}>
            <Text>C.C.N??</Text>
            <Text>C.C.N??</Text>
          </View>
        </Page>
      </Document>
    );
  };

  return (
    <>
      <BiArrowBack
        className="cursor-pointer w-8 h-8 mb-5"
        onClick={() => {
          handleChangeScreen((prevState) => ({
            ...prevState,
            view: 0,
          }));
        }}
      />

      <section className="mb-10">
        <BlobProvider document={documentToViewAndDownload()} tw="#1">
          {({ url, loading, error }) => {
            if (loading) {
              return <span>Generando documento...</span>;
            }
            if (!loading && url) {
              return (
                <a href={url} download>
                  <Button variant="contained" className="mt-5">
                    Descargar contrato
                  </Button>
                </a>
              );
            }
            if (error) {
              console.error(error);
              return <p>An error occurred</p>;
            }
            return null;
          }}
        </BlobProvider>
      </section>

      <section>{documentToViewAndDownload()}</section>
    </>
  );
};

PdfView.propTypes = {
  handleChangeScreen: PropTypes.func.isRequired,
  screenActive: PropTypes.object.isRequired,
};

export default PdfView;
