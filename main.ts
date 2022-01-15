
enum Protocol {
    //% block="Plasmid_DNA_Extraction"
    Plasmid_DNA_Extraction,
    //% block="Separate_DNA"
    Separate_DNA,
    //% blocks="Copy_DNA"
    Copy_DNA
}
enum Steps {
    //% block="Step_1"
    Step_1,
    //% block="Step_2"
    Step_2,
    //% blocks="Step_3"
    Step_3
}
enum Op_Steps {
    //% block="Op_Step_1"
    Op_Step_1,
    //% block="Op_Step_2"
    Op_Step_2,
    //% blocks="Op_Step_3"
    Op_Step_3
}
enum Sub_Steps {
    //% block="Sub_Step_1"
    Sub_Step_1,
    //% block="Sub_Step_2"
    Sub_Step_2,
    //% blocks="Sub_Step_3"
    Sub_Step_3
}
//% color="#AA278D"
//% groups="['Book-keeping instructions', 'Timing','Symbolic manipulation','Disposal','Declaration of resources','Measurement','Combination & mixing','Temperature & storage','Centrifugation','Detection and analysis']"
namespace BioBlocks {
    //% block="start_protocol %protocol"
    //% group="Book-keeping instructions"
    //% color='#FF8900'

    export function start_protocol(protocol: Protocol) {
    
    }
    //% block="end_protocol $protocol"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function end_protocol(protocol: Protocol) {

    }
    //% block="step: do $step"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function step(step: Steps) {

    }
    /**
     * Marks an optional step in the protocol.
     */
    //% block="optional_step: do $optional_step"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function optional_step(optional_step: Op_Steps) {

    }
    //% block
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function end_option(optional_step: Op_Steps) {

    }
    //% block
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function sub_step(sub_step:Sub_Steps) {

    }
    //% block="parallel_step of $step"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function parallel_step(step:Steps) {

    }
    //% block="comment %comment"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function comment(comment: string) {

    }
    /**
     *Marks the steps in the protocol that need further clarification for coding with BioCoder.
    */
    //% block="to_do %to_do"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function to_do(to_do: string) {

    }
    //% block="repeat $repeatstep"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function repeat(repeatstep: Steps) {

    }
    export function name_sample() {

    }   
    //% block
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function name_container() {

    }
    //% block
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function name_plate() {

    }





    //% block
    //% group="Timing"
    //% color="#F978A3"
    export function wait() {

    }
    //% block
    //% group="Timing"
    //% color="#F978A3"
    export function store_until() {

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





    //% block
    //% group="Symbolic manipulation"
    //% color="#F7A4FA"
    export function set_value() {

    }
    //% block
    //% group="Symbolic manipulation"
    //% color="#F7A4FA"
    export function assign() {

    }
    //% block
    //% group="Symbolic manipulation"
    //% color="#F7A4FA"
    export function add() {

    }
    //% block
    //% group="Symbolic manipulation"
    //% color="#F7A4FA"
    export function divede() {

    }
    //% block
    //% group="Symbolic manipulation"
    //% color="#F7A4FA"
    export function subtract() {

    }
    //% block
    //% group="Symbolic manipulation"
    //% color="#F7A4FA"
    export function multiply() {

    }



    //% block
    //% group="Disposal"
    export function discard() {

    }
    //% block
    //% group="Disposal"
    export function drain() {

    }


    //% block
    //% group="Declaration of resources"
    //% color="#9170FC"
    export function new_fluid() {

    }
    //% block
    //% group="Declaration of resources"
    //% color="#9170FC"
    export function new_solid() {

    }
    //% block
    //% group="Declaration of resources"
    //% color="#9170FC"
    export function new_container() {

    }
    //% block
    //% group="Declaration of resources"
    //% color="#9170FC"
    export function new_plate() {

    }
    //% block
    //% group="Declaration of resources"
    //% color="#9170FC"
    export function new_slide() {

    }
    //% block
    //% group="Declaration of resources"
    //% color="#9170FC"
    export function new_symbol() {

    }
    //% block
    //% group="Declaration of resources"
    //% color="#9170FC"
    export function new_column() {

    }




    //% block
    //% group="Measurement"
    //% color="#55F786"
    export function measure_fluid() {

    }
    //% block
    //% group="Measurement"
    //% color="#55F786"
    export function measure_solid() {

    }
    //% block
    //% group="Measurement"
    //% color="#55F786"
    export function measure_prop() {

    }
    //% block
    //% group="Measurement"
    //% color="#55F786"
    export function add_to_column() {

    }
    //% block
    //% group="Measurement"
    //% color="#55F786"
    export function add_to_slide() {

    }
    //% block
    //% group="Measurement"
    //% color="#55F786"
    export function collect_tissue() {

    }
    //% block
    //% group="Measurement"
    //% color="#55F786"
    export function plate_out() {

    }
    //% block
    //% group="Measurement"
    //% color="#55F786"
    export function transfer() {

    }




    //% block
    //% group="Combination & mixing"
    //% color="#0033FF"
    export function combine() {

    }
    

    //% block
    //% group="Temperature & storage"
    export function incubate() {

    }
    
    //% block="container $container|speed $speed|temperature $temperature|time $time"
    //% group="Centrifugation"
    //% color="#00C4FF"
    export function centrifuge(container:string, speed: number, temperature: number,time:number ) {

    }
    //% block
    //% group="Centrifugation"
    //% color="#00C4FF"
    export function centrifuge_pellet() {

    }
    //% block
    //% group="Centrifugation"
    //% color="#00C4FF"
    export function centrifuge_phases_top() {

    }
    //% block
    //% group="Centrifugation"
    //% color="#00C4FF"
    export function centrifuge_phases_bottom() {

    }
    //% block
    //% group="Centrifugation"
    //% color="#00C4FF"
    export function centrifuge_column() {

    }
    //% block
    //% group="Centrifugation"
    //% color="#00C4FF"
    export function centrifuge_flow_through() {

    }




    //% block
    //% group="Detection & analysis"
    export function ce_detect() {

    }



}
