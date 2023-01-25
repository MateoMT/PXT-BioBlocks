/**BioBlocks Code*/
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
enum Time_unit{
    //%block="secs"
    Seconds,  
    //%block="mins"
    Minutes,
    //%block="hrs"
    Hours,  
}
enum Speed_type{
    //%block="RPM"
    RPM,  
    //%block="G"
    G,  
}
enum Weight_unit{
    //%block="UG"
    Microgram,  
    //%block="MG"
    Milligram,
    //%block="GR"
    Gram,     
}
enum Vol_unit{
    //%block="UL"
    Microliter,  
    //%block="ML"
    Milliliter,
    //%block="L"
    Liter,     
}
enum Time_constraint_type{
    //%block="Current_fluid"
    Applicable_to_the_subsequent_use_of_the_contents_of_a_particular_container,  
    //%block="Nextstep"
    Applicable_between_a_pair_of_successive_steps_that_use_the_contents_of_a_container,  
}




//% weight=200 color=#FF5733 icon="\uf0c3"
//% groups="['Book-keeping instructions', 'Timing','Symbolic manipulation','Disposal','Declaration of resources','Measurement','Combination & mixing','Temperature & storage','Centrifugation','Detection and analysis']"
namespace BioBlocks {
    //% block="%protocol=variables_get(protocol_name)"
    //% group="Variables"
    //% color='#C1B504'
    //% weight=200
    export function protocol(protocol:string):string{
        return protocol;
    } 
    //% block="%step=variables_get(step:name)"
    //% group="Variables"
    //% color='#C1B504'
    //% weight=199
    export function step(step:string):string{
        return step;
    } 
    //% block="%container=variables_get(container_name)"
    //% group="Variables"
    //% color='#C1B504'
    //% weight=198
    export function container(container:string):string{
        return container;
    } 
    //% block="%name=variables_get(new a name)"
    //% group="Variables"
    //% color='#C1B504'
    //% weight=197
    export function new_name(name:string):string{
        return name;
    } 
    //% block="%name=variables_get(plate_name)"
    //% group="Variables"
    //% color='#C1B504'
    //% weight=196
    export function new_a_plate(name:string):string{
        return name;
    } 
    //% block="%fluid=variables_get(fluid_name)"
    //% group="Variables"
    //% color='#C1B504'
    //% weight=195
    export function fluid(fluid:string):string{
    return fluid;
    } 
    //% block="%solid=variables_get(solid_name)"
    //% group="Variables"
    //% color='#C1B504'
    //% weight=194
    export function solid(solid:string):string{
    return solid;
    } 
    //% block="%slide=variables_get(slide_name)"
    //% group="Variables"
    //% color='#C1B504'
    //% weight=193
    export function slide(slide:string):string{
    return slide;
    } 
    //% block="%symbol1=variables_get(symbol_name)"
    //% group="Variables"
    //% color='#C1B504'
    //% weight=192
    export function symbol1(symbol1:string):string{
    return symbol1;
    } 
    //% block="%column=variables_get(column_name)"
    //% group="Variables"
    //% color='#C1B504'
    //% weight=191
    export function column(column:string):string{
    return column;
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
    //% block="name plate: $plate (state:$state)"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    //% weight=82
    export function name_plate(plate:string,state:string) {

    }
    
    


    //% block="keep container $container aside for %duration %time_unit"
    //% group="Timing"
    //% color="#F978A3"
    //% weight=100
    export function wait(container: string, duration: number, time_unit:Time_unit) {

}
    //% block="store $container at $tempretature °C until $event (~$min_time-$max_time $time_unit)"
    //% group="Timing"
    //% color="#F978A3"
    //% inlineInputMode=inline
    //% weight=99
    export function store_until(container: string, tempretature:number,event:Event,min_time:number,max_time:number,time_unit:Time_unit) {

}
    //% block="note: If $container is used within $time $time_unit,||set temperature to $temp_use °C and use, else store it at $temp_store °C"
    //% group="Timing"
    //% color="#F978A3"
    //% inlineInputMode=inline
    //% weight=98
    export function use_or_store(container:string,time:number,time_unit:Time_unit,temp_use:number,temp_store:number) {

    }
    //% block="note: for container $container, proceed to $c_type within $time $time_unit"
    //% group="Timing"
    //% color="#F978A3"
    //% inlineInputMode=inline
    //% weight=97
    export function time_constraint(container:string,c_type:Time_constraint_type,time:number,time_unit:Time_unit) {

    }





    //% block="symbol $symbol1 's value is set to $value and unit is $unit"
    //% group="Symbolic manipulation"
    //% color="#009c6a"
    //% weight=100
    /**here a class should be created and used */
    export function set_time_value (symbol1:string, value: number, unit: Time_unit){

    }
    //% block="symbol $symbol1 's value is set to $value and unit is $unit"
    //% group="Symbolic manipulation"
    //% color="#009c6a"
    //% weight=99
    export function set_vol_value(symbol1:string, value: number, unit: Vol_unit) {

    }
    /**Sets symbolic volume s1 to be equal to symbolic volume s2. */
    //% block="let  symbol$symbol1 's value=$symbol2's"
    //% group="Symbolic manipulation"
    //% color="#009c6a"
    //% weight=98
    export function assign(symbol1: string, symbol2: string) {
        symbol1=symbol2;
    }
    //% block="symbol $symbol1 's value is assigned the value $volume1 + $volume2"
    //% group="Symbolic manipulation"
    //% color="#009c6a"
    //% weight=97
    export function add(symbol1: string,volume1: string, volume2: string) {
        
    }
 
    //% block="symbol $symbol1 's value is assigned the value $volume1 / $volume2"
    //% group="Symbolic manipulation"
    //% color="#009c6a"
    //% weight=96
    export function divede(symbol1:string,volume1: number, volume2:string) {

    }
    //% block="symbol $symbol1 's value is assigned the value $volume1 - $volume2"
    //% group="Symbolic manipulation"
    //% color="#009c6a"
    //% weight=95
    export function subtract(symbol1:string,volume1: number, volume2:string) {

    }
    //% block="symbol $symbol1 's value is assigned the value $volume1 * $volume2"
    //% group="Symbolic manipulation"
    //% color="#009c6a"
    //% weight=94
    export function multiply(symbol1:string,volume1: number, volume2:string) {

    }


    /**Discards the contents of the specified container. */
    //% block="discard the container $container"
    //% group="Disposal"
    //% color="#AA278D"
    //% weight=93
    export function discard(container: string) {

    }
    /**Drains the specified container. */
    //% block="drain the container $container"
    //% group="Disposal"
    //% color="#AA278D"
    //% weight=92
    export function drain(container: string) {

    }


     //% block="new fluid:$volume $unit $name at $temperature °C(the state $state)"
    //% group="Declaration of resources"
    //% color="#9170FC"
    //% inlineInputMode=inline
    //% weight=100
    export function new_fluid(volume: number,unit:Vol_unit, name: string,temperature: number,state: string) {

    }
     //% block="new solid: $name at $temperature °C(the state  $state)"
    //% group="Declaration of resources"
    //% color="#9170FC"
    //% inlineInputMode=inline
    //% weight=99
    export function new_solid(name: string, temperature: number,state: string) {

    }
   
    //% block="new $type1 container:  $name and $fluid as contents"
    //% group="Declaration of resources"
    //% color="#9170FC"
    //% inlineInputMode=inline
    //% weight=98
    export function new_container(type1:Container_type,name:string,fluid: string) {

    }
    //% block="new plate: $name (the state $state)"
    //% group="Declaration of resources"
    //% color="#9170FC"
    //% weight=97
    export function new_plate(name: string, state:string) {

    }
    //% block="new slide $name"
    //% group="Declaration of resources"
    //% color="#9170FC"
    //% weight=96
    export function new_slide(name: string) {

    }
    /**Used to declare a new parameter (symbolic time) with the given name and definition. */
    //% block="new symbol $symbol1 - $definition"
    //% group="Declaration of resources"
    //% color="#9170FC"
    //% weight=95
    export function new_symbol (symbol1: string, definition: string){

    }
    /**Used to declare a new column with the given name. */
    //% block="new column $name"
    //% group="Declaration of resources"
    //% color="#9170FC"
    //% weight=94
    export function new_column(name:string) {

    }

    //% block="measure out $volume $unit of $name from $container into container $tube1"
    //% group="Measurement"
    //% color="BC9000"
    //% inlineInputMode=inline
    //% weight=100
    export function measure_fluid(volume: number,unit:Vol_unit, name: string,container:string,tube1:string) {

    }
    //% block="measure out $volume $unit of $name"
    //% group="Measurement"
    //% color="BC9000"
    //% weight=99
    export function measure_fluid_out(volume:number,unit:Vol_unit, name: string) {

    }
    //% block="measure out $weight $unit of $name into container $container"
    //% group="Measurement"
    //% color="BC9000"
    //% inlineInputMode=inline
    //% weight=98
    export function measure_solid(weight: number,unit:Weight_unit, name: string,container:string) {

    }
    //% block="add $prop volumes of $source into $desk"
    //% group="Measurement"
    //% color="BC9000"
    //% inlineInputMode=inline
    //% weight=97
    export function measure_prop(prop: number, source: string,desk:string) {

    }
    //% block="add $volume1 $unit of $fluid to column $column1"
    //% group="Measurement"
    //% color="BC9000"
    //% inlineInputMode=inline
    //% weight=96
    export function add_to_column(volume1: number,unit:Vol_unit,fluid: string,column1:string) {

    }
    //% block="add $volume1 $unit of $sample to each of the slide $slide1"
    //% group="Measurement"
    //% color="BC9000"
    //% inlineInputMode=inline
    //% weight=95
    export function add_to_slide(volume1: number,unit:Vol_unit,sample: string,slide1:string) {

    }
    //% block="collect $weight $unit of tissue $tissue in container $container"
    //% group="Measurement"
    //% color="BC9000"
    //% inlineInputMode=inline
    //% weight=94
    export function collect_tissue(weight: number,unit:Weight_unit, tissue:string,container:string) {

    }
    //% block="plate out $volume1 $unit of contents in $container1 onto plate $plate1"
    //% group="Measurement"
    //% color="BC9000"
    //% inlineInputMode=inline
    //% weight=93
    export function plate_out(volume: number,unit:Vol_unit,container1:string,plate1:number ) {

    }
    //% block="transfer the contents of $container1 into another container $container2"
    //% group="Measurement"
    //% color="BC9000"
    //% inlineInputMode=inline
    //% weight=92
    export function transfer(container1:string,container2:string) {

    }




    //% block="combine containers $container1 and $container2"
    /**it can be improved according to the given number */
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% weight=100
    export function combine(container1:string,container2:string) {

    }
    //% block="combine containers $container1 and $container2 by $mix during $min-$max $unit"
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% inlineInputMode=inline
    //% weight=99
    export function combine_and_mix(container1:string,container2:string,mix:Mixing,min:number,max:number,unit:Time_unit) {

    }
    //% block="dissolve the pellet in the solution of container $container"
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% inlineInputMode=inline
    //% weight=98
    export function dissolve(container:string) {

    }
    //% block="close container $container tightly and gently mix the contents until $event1"
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% inlineInputMode=inline
    //% weight=97
    export function invert(container:string,event1:Event ) {

    }
    //% block="close container $container tightly and gently mix the contents by inverting the tube $min-$max times"
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% inlineInputMode=inline
    //% weight=96
    export function invert2(container:string,min:number, max:number ) {

    }
    //% block="mix solution in container $container by pipetting up and down several times"
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% weight=95
    export function pipet(container:string) {

    }
    //% block="resuspend the contents in container $container by vortexing/shaking vigorously"
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% weight=94
    export function resuspend(container:string) {

    }
    //% block="gently tap the mixture in $container for a few secs until $event1"
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% weight=93
    export function tap(container:string,event:Event) {

    }
    //% block="vortex the mixture in container $container for $time $unit"
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% weight=92
    export function vortex(container:string,time:number,unit:Time_unit) {

    }
    //% block="vortex column $column gently"
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% weight=91
    export function vortex_column(column:string) {

    }
    //% block="incubate $container at $temp °C for $time $unit1 ||with shaking at $shake $unit2 mixing gently by $type1 every $stir_time $unit3"
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% inlineInputMode=inline
    //% weight=90
    export function incubate_and_mix(container:string,temp:number,time:number,unit1:Time_unit,shake:number,unit2:Speed_type,type1:Mixing, stir_time:number,unit3:Time_unit) {

    }
    //% block="print a table with the given fluid array as the column elements ||and the given tubes (reaction names) as the row elements"
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% weight=89
    export function mixing_table() {

    }
    //% block="print a table with the given fluid array, initial concentration ||and final concentration values as parameters of the columns and their corresponding values as row values"
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% weight=88
    export function mixing_table_pcr() {

    }
    //% block="$function1 slide $slide in sample $sample for $time $unit $times times"
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% inlineInputMode=inline
    //% weight=87
    export function immerse_slide(function1:Func, slide:string,sample:string,time:number,unit:Time_unit,times:number) {

    }
    //% block="take out slide $slide1 from fluid $fluid1"
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% weight=86
    export function remove_slide(slide1:string,fluid1:string) {

    }
    //% block="$type_w slide $slides in fluid $sample $times times for $time $unit each"
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% inlineInputMode=inline
    //% weight=85
    export function wash_slide(type_w:Wash_type,sample:string,times:number,time:number,unit:Time_unit) {

    }
    //% block="homogenize the contents of $container in fluid $solution"
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% weight=84
    export function homogenize_tissue(container:string,solution:string) {

    }
    //% block="$wash tissue $tissue in fluid $sample $times times ||each for $time $unit at temperature $temp $wi shaking"
    //% group="Combination & mixing"
    //% color="#0033FF"
    //% inlineInputMode=inline
    //% weight=83
    export function wash_tissue(wash:Wash_type,tissue:string,sample:string,times:number,time:number,unit:Time_unit,temp:number,wi:Choice) {

    }
    
    
    

    //% block="incubate container $container at $temperature °C during $time $unit1 ||$choice shaking at $rpm $unit2"
    //% group="Temperature & storage"
    //%color="#02598B"
    //% inlineInputMode=inline
    //% weight=100
    export function incubate(container:string, temperature:number, time: number,unit1:Time_unit,choice:Choice,rpm:number,unit2:Speed_type) {

    }
    /**Stores the specified container at a given temperature and given duration of time. Combination of set_temp() and wait(). */
    //% block="perform $fun by storing container $contaienr at $temp °C for $time $unit"
    //% group="Temperature & storage"
    //%color="#02598B"
    //% inlineInputMode=inline
    //% weight=99
    export function store_for(fun:Func,container:string,temp: number,time:number,unit:Time_unit) {

    }
    //% block="store container $container at $temp °C for $time $unit"
    //% group="Temperature & storage"
    //%color="#02598B"
    //% inlineInputMode=inline
    //% weight=98
    export function store_f(container:string,temp: number,time:number,unit:Time_unit) {

    }
    //% block="set temperature of container $container to $temperature °C "
    //% group="Temperature & storage"
    //%color="#02598B"
    //% weight=97
    export function set_temp(container:string,temperature: number) {

    }
    /**Stores the specified plate at a given temperature. */
    //% block="store plate $plate at temperature $temperature °C "
    //% group="Temperature & storage"
    //%color="#02598B"
    //% weight=96
    export function store_plate(plate:string, temperature: number) {

    }

    /**Programs the thermocycler with the appropriate values for number of cycles, 
     * temperature of denaturation, time of denaturation, temperature of annealing, time of annealing, temperature of elongation, time of elongation, 
     * type of PCR and gradient temperature (for gradient PCR) and sends the contents of the specified container for thermocycling. 
     */

    //% block="put container $container in PCR and run $cycle cycles:||denature at $temp1 °C $time1 $unit1;anneal from $temp2 to $temp_grad °C($pcr_type) $time2 $unit2;elongate at $temp3 °C $time3 $unit3"
    //% group="Temperature & storage"
    //%color="#02598B"
    //% inlineInputMode=inline
    //% weight=95
    export function thermocycler(container:string,cycle: number,temp1:number,time1:number,unit1:Time_unit,temp2:number,temp_grad:number,pcr_type:PCR_type,time2:number,unit2:Time_unit,temp3:number,time3:number,unit3:Time_unit,) {

    }
    /**Programs the thermocycler with the appropriate values for annealing the primers with the template according to the specified gradient and sends the contents of the specified container for thermocycling. */
    //% block="cool container $container to $temperature at the rate of  $gradient every $time $unit"
    //% group="Temperature & storage"
    //%color="#02598B"
    //% inlineInputMode=inline
    //% weight=94
    export function thermocycler_anneal(container:string,temperature: number, gradient: number,time: number,unit:Time_unit ) {

    }
    /**Performs initial denaturation of the contents of the given container in a thermocycler. */
    //% block="put container $container in PCR to do inital denature at $temperature °C during $time $unit"
    //% group="Temperature & storage"
    //%color="#02598B"
    //% inlineInputMode=inline
    //% weight=93
    export function pcr_init_denat(container: string, temperature:number, time:number,unit:Time_unit) {

    }
    /**Performs final extension of the contents of the given container in a thermocycler. */
    //% block="termination of container $container: elongate at $temp_ext during $time_ext $unit1;||halt reaction at $temp_halt during $time_halt $unit2;hold at $temp_hold °C until removed from machine"
    //% group="Temperature & storage"
    //%color="#02598B"
    //% inlineInputMode=inline
    //% weight=92
    export function pcr_final_ext(container:string,temp_ext:number,time_ext:number,unit1:Time_unit,temp_halt:number,time_halt:number,unit2:Time_unit,temp_hold:number) {

    }
    /**Inoculates a medium in the given container with a specified solid colony of culture and performs incubation at the given temperature for the specified duration on a rotary incubator. */
    //% block="inoculate container $container with solid $sample1 and incubate ($choice shaking) for $time $unit at $temp °C "
    //% group="Temperature & storage"
    //%color="#02598B"
    //% inlineInputMode=inline
    //% weight=91
    export function inoculation(container:string,sample1:string,choice:Choice,time:number,unit:Time_unit,temp:number) {

    }
    /**Inoculates a medium in the given container with a specified solid colony of culture and performs incubation at the given temperature for the specified duration on a rotary incubator. */
    //% block="inoculate container $container with solid $sample1 and incubate ($choice shaking) ||for $time $unit at $temp °C (optional:Calibrate the spectrophotometer and make sure that the cell density of the culture has reached $cell_d X 10^6 cells/ml before continuing)"
    //% group="Temperature & storage"
    //%color="#02598B"
    //% inlineInputMode=inline
    //% weight=91
    export function inoculation_op(container:string,sample1:string,choice:Choice,time:number,unit:Time_unit,temp:number, cell_d:number) {

    }
    /**Incubates the given plate at the specified temperature for the specified duration of time. */
    //% block="incubate plate $plate at $temp °C during $time $unit"
    //% group="Temperature & storage"
    //%color="#02598B"
    //% inlineInputMode=inline
    //% weight=90
    export function incubate_plate(plate: string,temp:number,time:number,unit:Time_unit) {

    }
    /**Inverts the container containing a pellet to dry it. */
    //% block="stand the container $container for $time $unit in an inverted position ||on a paper towel to allow all of the fluid to drain away then dry at $temp °C"
    //% group="Temperature & storage"
    //%color="#02598B"
    //% inlineInputMode=inline
    //% weight=89
    export function invert_dry(container:string,time:number,unit:Time_unit,temp:number) {

    }
    /**Dries the contents(pellet) of the specified container with specified conditions and time. */
    //% block="dry pellet $pellet $dry_type at most $time $unit"
    //% group="Temperature & storage"
    //%color="#02598B"
    //% inlineInputMode=inline
    //% weight=88
    export function dry_pellet(pellet:string, dry_type:Drying,time:number,unit:Time_unit) {

    }
    /**Dries the specified slide in air. */
    //% block="dry slide $slide"
    //% group="Temperature & storage"
    //%color="#02598B"
    //% weight=87
    export function dry_slide(slide:string) {

    }
    
    
    
    
    //% block="centrifuge container $container at $speed $s_u for $time $unit at $temp °C"
    //% group="Centrifugation"
    //% color="#00C4FF"
    //% inlineInputMode=inline
    //% weight=100
    export function centrifuge(container:string, speed: number, s_u:Speed_type,time:number,unit:Time_unit,temp:number ) {

    }
    /**Performs centrifugation of given container at the specified temperature, speed and time and yields a pellet. The expected volume of supernatant is specified and the supernatant is discarded. */
    //% block="centrifuge container $container at $speed $s_u for $time $unit1 at $temp °C gently aspirate ||out the supernatant $volume $unit2 and discard it"
    //% group="Centrifugation"
    //% color="#00C4FF"
    //% inlineInputMode=inline
    //% weight=99
    export function centrifuge_pellet(container:string, speed: number, s_u:Speed_type,time:number,unit1:Time_unit,temp:number,volume: number,unit2:Vol_unit) {

    }
    /**The specified proportion of top(aqueous) phase is transferred to a new container and the bottom layer is discarded. */
    //% block="centrifuge container $container at $speed $s_u for $time $unit1 at $temp °C aspirate ||out $aspirate_vol $unit2 of the top layer to another container $container2"
    //% group="Centrifugation"
    //% color="#00C4FF"
    //% inlineInputMode=inline
    //% weight=98
    export function centrifuge_phases_top(container:string,speed: number, s_u:Speed_type,time:number,unit1:Time_unit,temp:number,aspirate_vol:number,unit2:Vol_unit, container2:string) {

    }
    /**The specified volume of top(aqueous) phase is discarded and the remaining portion is left behind in the container. */
    //% block="centrifuge container $container at $speed $s_u for $time $unit1 at $temp °C gently aspirate|| out the supernatant $volume $unit2 and discard it and leave hebind $leave_b $unit3 "
    //% group="Centrifugation"
    //% color="#00C4FF"
    //% inlineInputMode=inline
    //% weight=97
    export function centrifuge_phases_bottom(container:string,speed: number, s_u:Speed_type,time:number,unit1:Time_unit,temp:number,volume: number,unit2:Vol_unit,leave_b:number,unit3:Vol_unit) {

    }
    /**Performs centrifugation of given column at the specified temperature and for the specified duration of time. The flow-through is discarded. */
    //% block="centrifuge column $column at $speed $s_u for $time $unit at $temp °C and discard the flow-through"
    //% group="Centrifugation"
    //% color="#00C4FF"
    //% inlineInputMode=inline
    //% weight=96
    export function centrifuge_column(column:string, speed: number,s_u:Speed_type,time:number,unit:Vol_unit,temp:number) {

    }
    /**The column is discarded and the flow-through is left in the collection tube, container1. */
    //% block="centrifuge column $column at $speed $s_u for $time $unit at $temp °C ||and collect the flow-through into $container"
    //% group="Centrifugation"
    //% color="#00C4FF"
    //% inlineInputMode=inline
    //% weight=95
    export function centrifuge_flow_through(column:string, speed: number,s_u:Speed_type,time:number,unit:Vol_unit,temp:number,container:string) {

    }



    /**Sends the contents of the given container to a capillary electrophoresis(CE) unit for separation/detection at the given settings. */
    //% block="detect/separate container$container by capillary electrophoresis with the following settings:$length cm at $volt_per_cm V/cm using buffer $fluid1 for $time $unit"
    //% group="Detection & analysis"
    //% color="#02732B"
    //% inlineInputMode=inline
    //% weight=100
    export function ce_detect(container:string,length:number, volt_per_cm:number, fluid1:string, time: number,unit:Time_unit) {

    }   
    /**Performs agarose gel elecrophoresis of the contents of container1. */   
    //% block="perform $agar_conc (concentration of agarose in the gel) agarose gel electrophoresis ||of $no_samples samples ($pdt_vol $unit1) of container $containers loading buffer $loading_vol $unit2 then mixed with ethidium bromide and visualize with UV transilluminator to confirm the presence of required product"
    //% group="Detection & analysis"
    //% color="#02732B"
    //% inlineInputMode=inline
    //% weight=99
    export function electrophoresis(agar_conc:string,no_samples:number,pdt_vol:number,unit1:Vol_unit,containers:string,loading_vol:number,unit2:Vol_unit) {

    }
    /**Peforms fluorescence activated cell sorting (FACS) of the contents of container1. */
    //% block="FACS: sort container $container1 based on fluorescence"
    //% group="Detection & analysis"
    //% color="#02732B"
    //% weight=98
    export function facs(container1:string) {

    }
    //% block="measures the fluorescence of container $container"
    //% group="Detection & analysis"
    //% color="#02732B"
    //% weight=97
    export function measure_fluorescence(container:string) {

    }
    /**Prompts the used to mount the specified slide using the given liquid and to view it under the given device. */
    //% block="mount slide $slide with sample fluid $sample let it solidify and view under device $device"
    //% group="Detection & analysis"
    //% color="#02732B"
    //% weight=96
    export function mount_observe_slide(slide:string,sample:string,device:string) {

    }
    //% block="dilute contents of container $container to appropriate concentration and sequence it"
    //% group="Detection & analysis"
    //% color="#02732B"
    //% weight=95
    export function sequencing(container:string) {

    }
    //% block="for container $container:set the electroporator to ||deliver $voltage V and then press the PULSE button $pulse times"
    //% group="Detection & analysis"
    //% color="#02732B"
    //% weight=94
    export function electroporate(container:string,voltage:number,pulse:number) {

    }
    //% block="weigh the amount of container $container present"
    //% group="Detection & analysis"
    //% color="#02732B"
    //% weight=93
    export function weigh(container:string) {

    }
    /**Performs cell culture of the cells present in the given container with the specified parameters. */
    //% block="culture cells of container $container on medium $medium at:|| speed of centrifugation:$centri_speed temperature:$temp time $time $unit1 percent of carbon dioxide $percent_co2 fuild to wash the valves $valves fuild to wash chamber $chamber fuild for trypsinization $tryp time between feeds $feed $unit2"
    //% group="Detection & analysis"
    //% color="#02732B"
    //% inlineInputMode=inline
    //% weight=92
    export function cell_culture(container:string,medium:string,centri_speed:number,temp:number,time:number,unit1:Time_unit,percent_co2:string,valves:number,chamber:number,tryp:number,feed:number,unit2:Time_unit ) {

    } 
    /**Transfects the cells contained in container1 with DNA. */   
    //% block="transfect cells of container $container with DNA $dna on medium $medium"
    //% group="Detection & analysis"
    //% color="#02732B"
    //% weight=91
    export function transfection(container:string,dna:string,medium:string) {

    }

}
