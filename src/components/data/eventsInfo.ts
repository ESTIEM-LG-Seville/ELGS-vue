interface AllEvents {
    name: string,
    description: string,
    detail1: string,
    detail2: string
}
interface FasesTIMES {
    local: string,
    semifinal: string,
    final: string
}
export const eventsESTIEM : AllEvents[] = [
        {
            name: "Let's get a job",
            description: "Let's Get a Job es un evento de entrevistas rápidas que se realiza en la ETSI. El objetivo es dar a conocer a las empresas futuras promesas de la ingeniería de una forma cercana e interactiva.",
            detail1: "El primer día las empresas tienen la oportunidad de dar un taller a los participantes del evento. Pueden elegir el tema tecnológico que más les interese.",
            detail2: "El segundo día se realizan las distintas rondas de entrevistas donde las empresas le dan feedback a los particpantes. Los entrevistados son filtrados en función de las preferencias de las empresas."
        },
        {
            name: "TIMES",
            description: "Tournament in Management and Engineering Skill (TIMES) es una competición a nivel europeo. Consta de 3 fases, Local, Semifinal y Final. Se organizan alrededor de 40 fases locales cada año por toda Europa, cuyos ganadores avanzarán de fase. La competición consiste en ofrecer la mejor solución a un caso de estudio real proporcionado por la empresa. Lo cual no solamente requiere de los mejores estudiantes, si no también a las mentes más hábiles",
            detail1: "En en Local Group de Sevilla cada año organizamos la fase local. De tal forma que ponemos a prueba a los ESTIEMers de la ETSI, así como aquellos que se unan a los equipos. Ya que los equipos de 4 personas deben estar formados por al menos 2 ESTIEMers.",
            detail2: ""
        }
    ];
export const FasesTIMES: FasesTIMES = {
        local : "Durante las clasificatorias locales, hasta 10 equipos de una universidad compiten a nivel local utilizando sus habilidades analíticas de resolución de problemas para resolver un estudio de caso basado en la empresa.",
        semifinal: "En las Semifinales, todos los equipos locales ganadores de un área se reúnen para competir en un entorno internacional",
        final: "La final consiste en 5 equipos, tres días de competencia y un elaborado programa marco. La Final de 2023 fue celebrada por nosotros en LG Sevilla, España."
    };