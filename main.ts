enum Container {
    //% block="container_1"
    container_1,
    //% block="container_2"
    container_2,
    //% block="container_3"
    container_3,
    //% block="container_4"
    container_4,
    //% block="container_5"
    container_5,
    //% block="container_6"
    container_6,
    //% block="container_7"
    container_7,
    //% block="container_8"
    container_8,
}
enum Event{
/**"until all the ethanol has evaporated and no fluid is visible in the tube"*/
    //% block="ETHANOL_EVAP" 	
    ETHANOL_EVAP,
/**"until the O.D.600 reaches 0.6".*/
    //% block="OD"
    OD,
/** "until the sample has thawed". */
    //% block="THAW"
    THAW,
/** "until cooled". */
    //% block="COOLED"
    COOLED, 	
/** "until the colour develops". */
    //% block="COLOUR_DEVELOPS"
    COLOUR_DEVELOPS, 	
/** "until the precipitate stops sticking to the walls of the tube". */
    //% block="PPT_STOPS_STICKING" 	
    PPT_STOPS_STICKING,
/**"until the pellet dislodges". */
    //% block="PELLET_DISLODGES"
    PELLET_DISLODGES, 	
/**"keep on ice until the sample has thawed"*/
    //% block="THAW_ICE"
    THAW_ICE 	
}
enum Container_type{
    /**Sterile 1.5-ml microfuge tube */
    //% block="STERILE_MICROFUGE_TUBE"
    STERILE_MICROFUGE_TUBE,
    /** 15ml centrifuge tube*/
    //%block="CENTRIFUGE_TUBE_15ML"	
    CENTRIFUGE_TUBE_15ML, 
    //%block="FLASK "
    FLASK,
    /**Centrifuge bottle */
    //%block="CENTRIFUGE_BOTTLE "
    CENTRIFUGE_BOTTLE,
    /** Graduated cylinder*/ 
    //%block="GRADUATED_CYLINDER"
    GRADUATED_CYLINDER,
    /** container that can be placed in a humidified chamber*/	
    //%block="HUMIDIFIED_CHAMBER "
    HUMIDIFIED_CHAMBER,
    /** Reaction tube*/ 
    //%block="RXN_TUBE "
    RXN_TUBE,
    /**Fresh collection tube */
    //%block="FRESH_COLL_TUBE"
    FRESH_COLL_TUBE,
    /**container with liquid nitrogen */ 
    //%block="LIQUID_NITROGEN"
    LIQUID_NITROGEN,
    /** 50ml PLG tube*/ 
    //%block="PLG"
    PLG,
    /** Oakridge tube*/ 
    //%block="OAKRIDGE"
    OAKRIDGE, 
    /** Qiacartridge*/
    //%block="QIA_CARTRIDGE "
    QIA_CARTRIDGE,
    /**Cuvette stored on ice */ 
    //%block="CUVETTE_ICE "
    CUVETTE_ICE,
    /**spectrometry cuvette */ 
    //%block="SPEC_CUVETTE "
    SPEC_CUVETTE,
    /** 96-well stock plate*/
    //%block="STOCK_PLATE_96 "
    STOCK_PLATE_96,
    /** 96-well block*/
    //%block="WELL_BLOCK_96"
    WELL_BLOCK_96,
    /**96-well PCR plate */
    //%block="PCR_PLATE"
    PCR_PLATE,
    /**96-well liquid block*/
    //%block="LIQUID_BLOCK"
    LIQUID_BLOCK,
    /**Cell culture chamber */
    //%block="CELL_CULT_CHAMBER"
    CELL_CULT_CHAMBER,
    /** Eppendorf tube*/
    //%block="EPPENDORF"
    EPPENDORF,
    /** Sterile 2 ml microcentrifuge tube*/    
    //%block="STERILE_MICROFUGE_TUBE2ML"
    STERILE_MICROFUGE_TUBE2ML,
    /** Sterile 0.6-ml tube*/
    //%block="STERILE_PCR_TUBE "
    STERILE_PCR_TUBE,
    /** 50-ml centrifuge tube*/	
    //%block="CENTRI_TUBE_50ML"
    CENTRI_TUBE_50ML,
    /** screw-topped cryo vial*/    
    //%block="CRYO_VIAL "
    CRYO_VIAL,
    /** Screw-cap tube of appropriate volume*/
    //%block="SCREW_CAP_TUBE"
    SCREW_CAP_TUBE 	
}
enum Func{
    /**Specifies the kind of operation performed by a given instruction. */
    /**dewaxing */
    //%block="DEWAX"
    DEWAX,
    /**denaturation */
    //%block="DENATURE"
    DENATURE,
    /**enzyme inactivation */
    //%block="ENZYME_INAC"
    ENZYME_INAC,
}
enum Mixing{
    /**Typex of mixing */
    //%block="Tapping"
    Tapping,
    //%block="Stirring"
    Stirring,
    //%block="Inverting"
    Inverting,
    //%block="Vortexing"
    Vortexing,
    //%block="Resuspending"
    Resuspending,
    //%block="Dissolving"
    Dissolving,
    //%block="Pipetting"
    Pipetteing,  

}

enum Drying{
    /**Specifies whether drying has to be performed in air or in vacuum. */
    //%block="IN_AIR "
    IN_AIR,  
    //%block="IN_VACUUM"
    IN_VACUUM,    
}
enum PCR_type{
    /**Specifies the type of PCR being performed. For use in thermocycler(). */
    /** Regular PCR */
    //%block="NORMAL "
    NORMAL,  
    /**Gradient PCR */
    //%block="GRADIENT"
    GRADIENT ,
    /** Colony PCR */
    //%block="COLONY"
    COLONY, 
}
enum Wash_type{
    //%block="Wash"
    WASH,  
    //%block="Rinse"
    RINSE,  
}
enum Choice{
    //%block="with"
    WITH,  
    //%block="without"
    WITHOUT,  
}


//% color="#AA278D"
//% groups="['Book-keeping instructions', 'Timing','Symbolic manipulation','Disposal','Declaration of resources','Measurement','Combination & mixing','Temperature & storage','Centrifugation','Detection and analysis']"
namespace BioBlocks {
    //% block="%protocol=variables_get(protocol_name)"
    //% group="Definition"
    //% color='#C1B504'
    //% weight=200
    export function protocol(protocol:string):string{
        return protocol;
    } 
    //% block="%step=variables_get(step 1:name)"
    //% group="Definition"
    //% color='#C1B504'
    //% weight=199
    export function step(step:string):string{
        return step;
    } 
    //% block="%container=variables_get(container_name)"
    //% group="Definition"
    //% color='#C1B504'
    //% weight=198
    export function container(container:string):string{
        return container;
    } 
    //% block="%name=variables_get(new a name)"
    //% group="Definition"
    //% color='#C1B504'
    //% weight=197
    export function new_name(name:string):string{
        return name;
    } 
    //% block="%name=variables_get(plate_name)"
    //% group="Definition"
    //% color='#C1B504'
    //% weight=196
    export function new_a_plate(name:string):string{
        return name;
    } 




    //% block="new protocol %protocol and start:"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    //% weight=98
    export function start_protocol(protocol: string) {
    
    }
    //% block="end protocol $protocol"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    //% weight=97
    export function end_protocol(protocol: string) {

    }
    //% block="first step: $step"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    //% weight=96
    export function first_step(step: string) {

    }
    //% block="next step: $step"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    //% weight=95
    export function next_step(step: string) {

    }
    /** Marks an optional step in the protocol. */
    //% block="optional step: $optional_step"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    //% weight=94
    export function optional_step(optional_step: string) {

    }
    //% block="first optional step: $optional_step"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    //% weight=93
    export function first_option(optional_step: string) {

    }
    //% block="next optional step: $optional_step"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    //% weight=92
    export function next_option(optional_step: string) {

    }
    //% block="end the optional step"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    //% weight=91
    export function end_option() {

    }
    //% block="first sub-step: $sub_step_name"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    //% weight=90
    export function first_sub_step(sub_step_name:string) {

    }
    //% block="next sub-step: $sub_step_name"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    //% weight=89
    export function next_sub_step(sub_step_name:string) {

    }
    //% block="meanwhile, parallel step: $step"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    //% weight=88
    export function parallel_step(step:string) {

    }
    //% block="comment: %comment"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    //% weight=87
    export function comment(comment: string) {

    }
    /** Marks the steps in the protocol that need further clarification for coding with BioCoder. */
    //% block="step needs further clarification: %to_do"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    //% weight=86
    export function to_do(to_do: string) {

    }
    //% block="repeat step: $repeatstep"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    //% weight=85
    export function repeat(repeatstep: string) {

    }
    //% block="the name of container $container 's contents is set to $new_name"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    //% weight=84
    export function name_sample(container:string,new_name:string) {

    }   
    //% block="label container $container with the given name $name"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    //% weight=83
    export function name_container(container:string,name:string) {

    }
    //% block="new plate: $plate (state:$state)"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    //% weight=82
    export function name_plate(plate:string,state:string) {

    }
    
    
    //% block="hold $container wait for %duration ms"
    //% group="Timing"
    //% duration.shadow=timePicker
    //% color="#F978A3"
    //% expandableArgumentMode="toggle"
    export function wait(container: Container, duration: number) {

}
    //% block="store $container at $tempretature °C until $event"
    //% group="Timing"
    //% color="#F978A3"
    export function store_until(container: Container, tempretature:number,event:Event) {

}


    //% block
    //% group="Timing"
    //% color="#F978A3"
    export function use_or_store() {

    }
    //% block
    //% group="Timing"
    //% color="#F978A3"
    export function time_constraint() {

    }





    //% block="set symbol $symbol 's value is $value, unit is $unit"
    //% group="Symbolic manipulation"
    //% color="#F7A4FA"
    export function set_value(symbol:string, value: number, unit: number) {

    }
    /**Sets symbolic volume s1 to be equal to symbolic volume s2. */
    //% block="assign symbol1 $symbol1, symbol2 $symbol2"
    //% group="Symbolic manipulation"
    //% color="#F7A4FA"
    export function assign(symbol1: string, symbol2: string) {

    }
    //% block="add $volume 's $name"
    //% group="Symbolic manipulation"
    //% color="#F7A4FA"
    export function add(volume: number, name: string) {

    }
    //% block="add $volume 's $name into $column"
    //% group="Symbolic manipulation"
    //% color="#F7A4FA"
    export function add2(volume: number, name: string, culume: string) {

    }
    //% block="divede $volume from $symbolic"
    //% group="Symbolic manipulation"
    //% color="#F7A4FA"
    export function divede(volume: number, symbolic:string) {

    }
    //% block="subtract $volume from $symbolic"
    //% group="Symbolic manipulation"
    //% color="#F7A4FA"
    export function subtract(volume: number, symbolic:string) {

    }
    //% block="muptiply $volume from $symbolic"
    //% group="Symbolic manipulation"
    //% color="#F7A4FA"
    export function multiply(volume: number, symbolic:string) {

    }


    /**Discards the contents of the specified container. */
    //% block="discard $container"
    //% group="Disposal"
    export function discard(container: Container) {

    }
    /**Drains the specified container. */
    //% block="drain $container"
    //% group="Disposal"
    export function drain(container: Container) {

    }


    //% block="new fluid $name, $volume ml, at $temperature °C, the state  $state"
    //% group="Declaration of resources"
    //% color="#9170FC"
    //% inlineInputMode=inline
    export function new_fluid(name: string, volume: number, temperature: number,state: string) {

    }
     //% block="new solid $name,  at $temperature °C, the state  $state"
    //% group="Declaration of resources"
    //% color="#9170FC"
    //% inlineInputMode=inline
    export function new_solid(name: string,  temperature: number,state: string) {

    }
   
    //% block="new $type container to store $fluid, id= $id"
    //% group="Declaration of resources"
    //% color="#9170FC"
    export function new_container(type:Container_type, fluid: string, id:Container) {

    }
    //% block="new plate $name, the state $state"
    //% group="Declaration of resources"
    //% color="#9170FC"
    export function new_plate(name: string, state:string) {

    }
    //% block="new slide $name"
    //% group="Declaration of resources"
    //% color="#9170FC"
    export function new_slide(name: string) {

    }
    /**Used to declare a new parameter (symbolic time) with the given name and definition. */
    //% block="new symbol $symbol , $definiton"
    //% group="Declaration of resources"
    //% color="#9170FC"
    export function new_symbol(symbol: string, definition: string) {

    }
    /**Used to declare a new column with the given name. */
    //% block
    //% group="Declaration of resources"
    //% color="#9170FC"
    export function new_column(name:string) {

    }



    //% block="measure $volume 's  $name"
    //% group="Measurement"
    //% color="#55F786"
    export function measure(volume: number, name: string) {

    }
    //% block="measure out $volume 's  $name into $container"
    //% group="Measurement"
    //% color="#55F786"
    export function measure_put(volume:number, name: string,container:Container) {

    }

    //% block="add $weight 's $name into $column"
    //% group="Measurement"
    //% color="#55F786"
    export function add_to_column(weight: number,name: string,column:string) {

    }

    //% block="collect $weight 's tissue  $tissue into $container"
    //% group="Measurement"
    //% color="#55F786"
    export function collect_tissue(weight: number,tissue:string,container:Container) {

    }
    //% block="plate out $volume from $container onto $id plate"
    //% group="Measurement"
    //% color="#55F786"
    export function plate_out(volume: number, container:Container,id:number ) {

    }
    //% block="transfer the contents of $container1 to $container2"
    //% group="Measurement"
    //% color="#55F786"
    export function transfer(container1:Container,container2:Container) {

    }




    //% block="combine contents in $container1 and $container2"
    /**it can be improved according to the given number */
    //% group="Combination & mixing"
    //% color="#0033FF"
    export function combine(container1:Container,container2:Container) {

    }
    //% block="combine contents in $container1 and $container2 by mixing type $mix during $time"
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% inlineInputMode=inline
    export function combine_and_mix(container1:Container,container2:Container,mix:Mixing,time:number) {

    }
    //% block="dissolves the contents of $container in tube"
    //% group="Combination & mixing"
    //% color="#0033FF"
    export function dissolve(container:Container) {

    }
    //% block="close the tube tightly and gently mix the contents in $container by inverting the tube $min - $max times."
    //% group="Combination & mixing"
    //% color="#0033FF"
    export function invert(container:Container,min:number, max:number ) {

    }
    //% block="mix solution in $container by pipetting up and down several times."
    //% group="Combination & mixing"
    //% color="#0033FF"
    export function pipet(container:Container) {

    }
    //% block="resuspend the contents in $container by vortexing/shaking vigorously."
    //% group="Combination & mixing"
    //% color="#0033FF"
    export function resuspend(container:Container) {

    }
    //% block="gently tap the mixture in $container for $time secs."
    //% group="Combination & mixing"
    //% color="#0033FF"
    export function tap(container:Container,time:number) {

    }
    //% block="vortex the mixture in $container for $time min."
    //% group="Combination & mixing"
    //% color="#0033FF"
    export function vortex(container:Container,time:number) {

    }
    //% block="vortex column $column gently."
    //% group="Combination & mixing"
    //% color="#0033FF"
    export function vortex_column(column:string) {

    }
    //% block="incubate $container at $temp for $time hrs with shaking at $shake rpm, mixing gently by stirring the container every $stir_time mins"
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% inlineInputMode=inline
    export function incubate_and_mix(container:Container,temp:number,time:number,shake:number,stir_time:number) {

    }
    //% block="prints a table with the given fluid array as the column elements and the given tubes (reaction names) as the row elements"
    //% group="Combination & mixing"
    //% color="#0033FF"
    export function mixing_table() {

    }
    //% block="prints a table with the given fluid array, initial concentration and final concentration values as parameters of the columns and their corresponding values as row values"
    //% group="Combination & mixing"
    //% color="#0033FF"
    export function mixing_table_pcr() {

    }
    //% block="immerse slide $slide in sample $sample for $time mins,$times times"
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% inlineInputMode=inline
    export function immerse_slide(slide:string,sample:string,time:number,times:number) {

    }
    //% block="take out slide $slide1 from solutiona $fluid1"
    //% group="Combination & mixing"
    //% color="#0033FF"
    export function remove_slide(slide1:string,fluid1:string) {

    }
    //% block="$type_w slide $slides in fluid $sample, $times for $time secs each."
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% inlineInputMode=inline
    export function wash_slide(type_w:Wash_type,sample:string,times:number,time:number) {

    }
    //% block="homogenize the contents of $container in fluid $solution"
    //% group="Combination & mixing"
    //% color="#0033FF"
    export function homogenize_tissue(container:Container,solution:string) {

    }
    //% block="$wash tissue $tissue in fluid $sample, $times times each for $time secs at temperature $temp $wi shaking"
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% inlineInputMode=inline
    export function wash_tissue(wash:Wash_type,tissue:string,sample:string,times:number,time:number,temp:number,wi:Choice) {

    }
    
    
    

    //% block="incubate $container at $temperature during $time with shaking at $rpm RPM"
    //% group="Temperature & storage"
    //%color="#02598B"
    //% inlineInputMode=inline
    export function incubate(container:Container, temperature:number, time: number,rpm:number) {

    }
    /**Stores the specified container at a given temperature and given duration of time. Combination of set_temp() and wait(). */
    //% block="store $container at $temperature °C during $time to do $fun"
    //% group="Temperature & storage"
    //%color="#02598B"
    //% inlineInputMode=inline
    export function store_for(container:Container,temperature: number,time:number,fun:Func) {

    }
    //% block="set the contents of $container 's temperature at $temperature °C "
    //% group="Temperature & storage"
    //%color="#02598B"
    export function set_temp(container:Container,temperature: number) {

    }
    /**Stores the specified plate at a given temperature. */
    //% block="store $plate at temperature $temperature °C "
    //% group="Temperature & storage"
    //%color="#02598B"
    export function store_plate(plate:string, temperature: number) {

    }



    /**Programs the thermocycler with the appropriate values for number of cycles, 
     * temperature of denaturation, time of denaturation, temperature of annealing, time of annealing, temperature of elongation, time of elongation, 
     * type of PCR and gradient temperature (for gradient PCR) and sends the contents of the specified container for thermocycling. 
     */

    //% block="put master_mix $container in PCR ($pcr_type type) run $cycle cycles: temp1 $temp1  during $time1; temp2 $temp2  during $time2; temp3 $temp3  during $time3;||  grad_temp is $grad_temp"
    //% group="Temperature & storage"
    //%color="#02598B"
    //% inlineInputMode=inline
    export function thermocycler(container:Container,pcr_type:PCR_type,cycle: number,temp1:number,time1:number,temp2:number,time2:number,temp3:number,time3:number,grad_temp:number) {

    }
    /**Programs the thermocycler with the appropriate values for annealing the primers with the template according to the specified gradient and sends the contents of the specified container for thermocycling. */
    //% block="annel $container at temperature $temperature during $time at gradient $gradient"
    //% group="Temperature & storage"
    //%color="#02598B"
    //% inlineInputMode=inline
    export function thermocycler_anneal(container:Container,temperature: number, time: number, gradient: number) {

    }
    /**Performs initial denaturation of the contents of the given container in a thermocycler. */
    //% block="denature the content in $container at temperature $temperature during $time"
    //% group="Temperature & storage"
    //%color="#02598B"
    export function pcr_init_denat(container: Container, temperature:number, time:number) {

    }
    /**Performs final extension of the contents of the given container in a thermocycler. */
    //% block="elongate the temperature of $container at $temp_ext during $time_ext;halt reaction at $temp_halt during $time_halt;hold at $temp_hold until removed from machine"
    //% group="Temperature & storage"
    //%color="#02598B"
    //% inlineInputMode=inline
    export function pcr_final_ext(container:Container,temp_ext:number,time_ext:number,temp_halt:number,time_halt:number,temp_hold:number) {

    }
    /**Inoculates a medium in the given container with a specified solid colony of culture and performs incubation at the given temperature for the specified duration on a rotary incubator. */
    //% block="use sample $sample for inoculating medium $medium, then incubate at temperature $temp during $time, shaking $shaking (yes or no)"
    //% group="Temperature & storage"
    //%color="#02598B"
    //% inlineInputMode=inline
    export function inoculation(sample: string,medium:string,temp:number,time:number,shaing:string) {

    }
    /**Incubates the given plate at the specified temperature for the specified duration of time. */
    //% block="incubate plate $plate at temperature $temp during $time"
    //% group="Temperature & storage"
    //%color="#02598B"
    export function incubate_plate(plate: string,temp:number,time:number) {

    }
    /**Inverts the container containing a pellet to dry it. */
    //% block="dry the contents of $container at temperature $temp"
    //% group="Temperature & storage"
    //%color="#02598B"
    export function invert_dry(container:Container,temp:number) {

    }
    /**Dries the contents(pellet) of the specified container with specified conditions and time. */
    //% block="dry $container at condition $dry_type during $time"
    //% group="Temperature & storage"
    //%color="#02598B"
    export function dry_pellet(container:Container, dry_type:Drying,time:number) {

    }
    /**Dries the specified slide in air. */
    //% block="dry slide $slide in air"
    //% group="Temperature & storage"
    //%color="#02598B"
    export function dry_slide(slide:string) {

    }
    
    
    
    
    //% block="put container $container in the centrifuge, run at speed $speed, temperature $temperature, during $time"
    //% group="Centrifugation"
    //% color="#00C4FF"
    //% inlineInputMode=inline
    export function centrifuge(container:Container, speed: number, temperature: number,time:number ) {

    }
    /**Performs centrifugation of given container at the specified temperature, speed and time and yields a pellet. The expected volume of supernatant is specified and the supernatant is discarded. */
    //% block="after the centrifugation, specify expected volume $volume"
    //% group="Centrifugation"
    //% color="#00C4FF"
    //% inlineInputMode=inline
    export function centrifuge_pellet(volume: number ) {

    }
    /**The specified proportion of top(aqueous) phase is transferred to a new container and the bottom layer is discarded. */
    //% block="after the centrifugation, transfer $volume proportion of top(aqueous) phase to $container, discard the bottom layer "
    //% group="Centrifugation"
    //% color="#00C4FF"
    export function centrifuge_phases_top(volume:number,container: Container) {

    }
    /**The specified volume of top(aqueous) phase is discarded and the remaining portion is left behind in the container. */
    //% block="after the centrifugation, discard $aspirate_vol of top phase, $leave_behind of remaining portion is left"
    //% group="Centrifugation"
    //% color="#00C4FF"
    export function centrifuge_phases_bottom(aspirate_vol:number,leave_behind: number) {

    }
    /**Performs centrifugation of given column at the specified temperature and for the specified duration of time. The flow-through is discarded. */
    //% block="put column $column in the centrifuge, run at speed $speed, temperature $temperature, during $time"
    //% group="Centrifugation"
    //% color="#00C4FF"
    //% inlineInputMode=inline
    export function centrifuge_column(column:string, speed: number, temperature: number,time:number) {

    }
    /**The column is discarded and the flow-through is left in the collection tube, container1. */
    //% block="after the centrifugation, given columnis is discarded and collect the flow-through into $container"
    //% group="Centrifugation"
    //% color="#00C4FF"
    export function centrifuge_flow_through(container:Container) {

    }



    /**Sends the contents of the given container to a capillary electrophoresis(CE) unit for separation/detection at the given settings. */
    //% block="send the contents of $container to a capillary electrophoresis(CE) unit : length $length,voltage $volt_per_cm,separation buffer $fluid during $time"
    //% group="Detection & analysis"
    //% color="#02732B"
    //% inlineInputMode=inline
    export function ce_detect(container:Container,length:number, volt_per_cm:number, fluid:string, time: number) {

    }   
    /**Performs agarose gel elecrophoresis of the contents of container1. */   
    //% block="choose containers $containers, load $no_samples samples onto the gel($volume) , concentration of agarose $agar_conc , volume of loading buffer $loading_vol"
    //% group="Detection & analysis"
    //% color="#02732B"
    //% inlineInputMode=inline
    export function electrophoresis(containers:Container,no_samples:number,volume:string,agar_conc:number,loading_vol:number) {

    }
    /**Peforms fluorescence activated cell sorting (FACS) of the contents of container1. */
    //% block="peforms fluorescence activated cell sorting (FACS) of the contents of $container1"
    //% group="Detection & analysis"
    //% color="#02732B"
    export function facs(container1:Container) {

    }
    //% block="measures the fluorescence of the contents of $container"
    //% group="Detection & analysis"
    //% color="#02732B"
    export function measure_fluorescence(container:Container) {

    }
    /**Prompts the used to mount the specified slide using the given liquid and to view it under the given device. */
    //% block="put sample $sample on slide $slide, observe it by device $device"
    //% group="Detection & analysis"
    //% color="#02732B"
    export function mount_observe_slide(sample:string,slide:string,device:string) {

    }
    //% block="dilute contents in $container to appropriate concentration and sequence it"
    //% group="Detection & analysis"
    //% color="#02732B"
    export function sequencing(container:Container) {

    }
    //% block="electroporate the contents of $container at voltage $voltage, pulses $pulse times"
    //% group="Detection & analysis"
    //% color="#02732B"
    export function electroporate(container:Container,voltage:number,pulse:number) {

    }
    //% block="weigh the amount of $container"
    //% group="Detection & analysis"
    //% color="#02732B"
    export function weigh(container:Container) {

    }
    /**Performs cell culture of the cells present in the given container with the specified parameters. */
    //% block="culture cells in $container with medium $medium at conditions:|| speed of centrifugation:$centri_speed,temperature:$temp,time $time,percent of carbon dioxide $percent_co2,fuild to wash the valves $valves,fuild to wash chamber $chamber,fuild for trypsinization $tryp, time between feeds $feed"
    //% group="Detection & analysis"
    //% color="#02732B"
    //% inlineInputMode=inline
    export function cell_culture(container:Container,medium:string,centri_speed:number,temp:number,time:number,percent_co2:number,valves:number,chamber:number,tryp:number,feed:number ) {

    } 
    /**Transfects the cells contained in container1 with DNA. */   
    //% block="use DNA $dna to transfect cells in $container by medium $medium"
    //% group="Detection & analysis"
    //% color="#02732B"
    export function transfection(dna:string,container:Container,medium:string) {

    }



}
