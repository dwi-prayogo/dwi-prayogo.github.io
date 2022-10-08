
$(document).ready(function(){
    $('.cell').click(function(){
        let isi = $(this).text();
        let tid = $(this).prop('id');
        let rid = tid.split('__');
        let id_baris = rid[1];
        let nama = $('#nama__'+id_baris).text();

        if(isi=='Hapus'){
            let konfirmasi = confirm(`Sudah yakin di hapus ${nama}?`);
            if(!konfirmasi) return;

            $('#baris__'+id_baris).fadeOut();
        }else{
            alert("Anda mengklik kolom yang berisi : " + $(this).html() + "!");
        }
    })
})


