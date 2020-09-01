var originalFirstlayerStart = `; G-Code originally generated by Simplify3D(R) Version 4.1.2, based on proposed code by vector76
;M80 ; power supply on
G90
M82
M106 S0
M140 S60
M190 S60
M104 S210 T0
M109 S210 T0
G28 ; home all axes
;G29 ; probe ABL
;M420 S1 ; restore ABL mesh 
;customstart
; process Color1
; layer 1, Z = 0.200
T0
G92 E0.0000
G1 E-5.0000 F2400
`

var originalskirt =`G1 Z0.400 F1200
G1 X34.636 Y36.314 F6000
G1 Z0.200 F1200
G1 E0.0000 F2400
G92 E0.0000
G1 X36.314 Y34.636 E0.1023 F1800
G1 X63.686 Y34.636 E1.2822
G1 X65.364 Y36.314 E1.3844
G1 X65.364 Y63.686 E2.5643
G1 X63.686 Y65.364 E2.6666
G1 X36.314 Y65.364 E3.8465
G1 X34.636 Y63.686 E3.9487
G1 X34.636 Y36.314 E5.1286
G92 E0.0000
G1 E-5.0000 F2400
G1 Z0.600 F1200
G1 X35.212 Y36.552 F6000
G1 Z0.200 F1200
G1 E0.0000 F2400
G92 E0.0000
G1 X36.552 Y35.212 E0.0817 F1800
G1 X63.448 Y35.212 E1.2410
G1 X64.788 Y36.552 E1.3227
G1 X64.788 Y63.448 E2.4820
G1 X63.448 Y64.788 E2.5637
G1 X36.552 Y64.788 E3.7231
G1 X35.212 Y63.448 E3.8048
G1 X35.212 Y36.552 E4.9641
G92 E0.0000
G1 E-5.0000 F2400
`
var originalSquare = `; feature inner perimeter
G1 Z0.600 F1200
G1 X37.788 Y37.788 F6000
G1 X37.788 Y38.202
G1 X38.940 Y38.940
G1 Z0.200 F1200
G1 E0.0000 F2400
G92 E0.0000
G1 X61.060 Y38.940 E0.9535 F1350
G1 X61.060 Y61.060 E1.9069
G1 X38.940 Y61.060 E2.8604
G1 X38.940 Y38.940 E3.8139
G1 X38.364 Y38.364 F6000
G92 E0.0000
G1 X61.636 Y38.364 E1.0031 F1350
G1 X61.636 Y61.636 E2.0063
G1 X38.364 Y61.636 E3.0094
G1 X38.364 Y38.364 E4.0125
; feature outer perimeter
G1 X37.788 Y37.788 F6000
G92 E0.0000
G1 X62.212 Y37.788 E1.0528 F900
G1 X62.212 Y62.212 E2.1056
G1 X37.788 Y62.212 E3.1584
G1 X37.788 Y37.788 E4.2111
; feature solid layer
G1 X60.465 Y39.286 F6000
G92 E0.0000
G1 X60.714 Y39.535 E0.0152 F1440
G1 X60.714 Y40.350 E0.0503
G1 X59.650 Y39.286 E0.1152
G1 X58.836 Y39.286 E0.1503
G1 X60.714 Y41.164 E0.2648
G1 X60.714 Y41.979 E0.2999
G1 X58.021 Y39.286 E0.4640
G1 X57.207 Y39.286 E0.4992
G1 X60.714 Y42.793 E0.7130
G1 X60.714 Y43.608 E0.7481
G1 X56.392 Y39.286 E1.0116
G1 X55.578 Y39.286 E1.0467
G1 X60.714 Y44.422 E1.3598
G1 X60.714 Y45.237 E1.3949
G1 X54.763 Y39.286 E1.7577
G1 X53.948 Y39.286 E1.7928
G1 X60.714 Y46.052 E2.2053
G1 X60.714 Y46.866 E2.2404
G1 X53.134 Y39.286 E2.7025
G1 X52.319 Y39.286 E2.7376
G1 X60.714 Y47.681 E3.2494
G1 X60.714 Y48.495 E3.2845
G1 X51.505 Y39.286 E3.8459
G1 X50.690 Y39.286 E3.8810
G1 X60.714 Y49.310 E4.4921
G1 X60.714 Y50.125 E4.5272
G1 X49.875 Y39.286 E5.1879
G1 X49.061 Y39.286 E5.2230
G1 X60.714 Y50.939 E5.9334
G1 X60.714 Y51.754 E5.9685
G1 X48.246 Y39.286 E6.7286
G1 X47.432 Y39.286 E6.7637
G1 X60.714 Y52.568 E7.5734
G1 X60.714 Y53.383 E7.6085
G1 X46.617 Y39.286 E8.4679
G1 X45.802 Y39.286 E8.5030
G1 X60.714 Y54.198 E9.4120
G1 X60.714 Y55.012 E9.4471
G1 X44.988 Y39.286 E10.4058
G1 X44.173 Y39.286 E10.4409
G1 X60.714 Y55.827 E11.4492
G1 X60.714 Y56.641 E11.4844
G1 X43.359 Y39.286 E12.5424
G1 X42.544 Y39.286 E12.5775
G1 X60.714 Y57.456 E13.6851
G1 X60.714 Y58.270 E13.7202
G1 X41.730 Y39.286 E14.8775
G1 X40.915 Y39.286 E14.9126
G1 X60.714 Y59.085 E16.1196
G1 X60.714 Y59.900 E16.1547
G1 X40.100 Y39.286 E17.4113
G1 X39.286 Y39.286 E17.4464
G1 X60.714 Y60.714 E18.7527
G1 X59.900 Y60.714 E18.7878
G1 X39.286 Y40.100 E20.0445
G1 X39.286 Y40.915 E20.0796
G1 X59.085 Y60.714 E21.2865
G1 X58.270 Y60.714 E21.3216
G1 X39.286 Y41.730 E22.4789
G1 X39.286 Y42.544 E22.5141
G1 X57.456 Y60.714 E23.6217
G1 X56.641 Y60.714 E23.6568
G1 X39.286 Y43.359 E24.7148
G1 X39.286 Y44.173 E24.7499
G1 X55.827 Y60.714 E25.7583
G1 X55.012 Y60.714 E25.7934
G1 X39.286 Y44.988 E26.7520
G1 X39.286 Y45.802 E26.7872
G1 X54.198 Y60.714 E27.6962
G1 X53.383 Y60.714 E27.7313
G1 X39.286 Y46.617 E28.5907
G1 X39.286 Y47.432 E28.6258
G1 X52.568 Y60.714 E29.4355
G1 X51.754 Y60.714 E29.4706
G1 X39.286 Y48.246 E30.2306
G1 X39.286 Y49.061 E30.2658
G1 X50.939 Y60.714 E30.9761
G1 X50.125 Y60.714 E31.0113
G1 X39.286 Y49.875 E31.6720
G1 X39.286 Y50.690 E31.7071
G1 X49.310 Y60.714 E32.3182
G1 X48.495 Y60.714 E32.3533
G1 X39.286 Y51.505 E32.9147
G1 X39.286 Y52.319 E32.9498
G1 X47.681 Y60.714 E33.4616
G1 X46.866 Y60.714 E33.4967
G1 X39.286 Y53.134 E33.9588
G1 X39.286 Y53.948 E33.9939
G1 X46.052 Y60.714 E34.4064
G1 X45.237 Y60.714 E34.4415
G1 X39.286 Y54.763 E34.8043
G1 X39.286 Y55.577 E34.8394
G1 X44.422 Y60.714 E35.1525
G1 X43.608 Y60.714 E35.1876
G1 X39.286 Y56.392 E35.4511
G1 X39.286 Y57.207 E35.4862
G1 X42.793 Y60.714 E35.7000
G1 X41.979 Y60.714 E35.7352
G1 X39.286 Y58.021 E35.8993
G1 X39.286 Y58.836 E35.9344
G1 X41.164 Y60.714 E36.0489
G1 X40.350 Y60.714 E36.0841
G1 X39.286 Y59.650 E36.1489
G1 X39.286 Y60.465 E36.1840
G1 X39.535 Y60.714 E36.1992
G92 E0.0000
G1 E-5.0000 F2400
`
var originalFirstlayerEnd = `; layer end
G28 X0 ; home X axis
M106 S0 ; turn off cooling fan
M104 S0 ; turn off extruder
M140 S0 ; turn off bed
M84 ; disable motors
`