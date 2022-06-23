class Lanchonete {
    constructor(McLanche, Big, McHen) {

        class McLanche {
            constructor(carne, queijo, batatap, fruta) {
                this.carne = carne;
                this.queijo = queijo;
                this.batatap = batatap;
                this.fruta = fruta;
            }
        }

        class Big {
            constructor(alface, queijo, molho, cebola, picles, pao, batatam, bebida) {
                this.alface = alface;
                this.queijo = queijo;
                this.molho = molho;
                this.cebola = cebola;
                this.picles = picles;
                this.pao = pao;
                this.batatam = batatam;
                this.bebida = bebida;
            }
        }

        class McHen {
            constructor(alface, queijo, picles, batatap, batatam) {
                this.alface = alface;
                this.queijo = queijo;
                this.picles = picles;
                this.batatap = batatap;
                this.batatam = batatam;
            }
        }
    }
}