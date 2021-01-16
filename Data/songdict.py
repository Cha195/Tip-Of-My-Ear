import random

mydict = {'pop': {'80s': {'10': ['https://youtu.be/DWfY9GRe7SI', 'https://youtu.be/djV11Xbc914', 'https://youtu.be/Zi_XLOBDo_Y', 'https://youtu.be/dQw4w9WgXcQ', 'https://youtu.be/btPJPFnesV4'],
                          '20': ['https://youtu.be/fNFzfwLM72c0', 'https://youtu.be/ttEMYvpoR-k', 'https://youtu.be/79fzeNUqQbQ', 'https://youtu.be/OMOGaugKpzs', 'https://youtu.be/2dzf4T3RbEc'],
                          '30': ['https://youtu.be/BN1WwnEDWAM', 'https://youtu.be/izGwDsrQ1eQ', 'https://youtu.be/n3nPiBai66M', 'https://youtu.be/zuuObGsB0No', 'https://youtu.be/cJRP3LRcUFg'],
                          '40': ['https://youtu.be/wD6Pq0bSMPo', 'https://youtu.be/AsNTmjlf1vI', 'https://youtu.be/xFrGuyw1V8s'],
                          '50': ['https://youtu.be/2H5qNe2MFzk', 'https://youtu.be/Tc1IphRx1pk', 'https://youtu.be/x0bEZH6ZqG4']},
                  '90s': {'10': [],
                          '20': ['https://youtu.be/5ZYgIrqELFw'],
                          '30': [],
                          '40': [],
                          '50': []},
                  '00s': {'10': [],
                          '20': [],
                          '30': [],
                          '40': [],
                          '50': []},
                  '10s': {'10': ['https://youtu.be/RgKAFK5djSk', 'https://youtu.be/4-TbQnONe_w', 'https://youtu.be/YqeW9_5kURI', 'https://youtu.be/31crA53Dgu0', 'https://youtu.be/YQHsXMglC9A'],
                          '20': ['https://youtu.be/dX3k_QDnzHE', 'https://youtu.be/_ovdm2yX4MA', 'https://youtu.be/5NV6Rdv1a3I', 'https://youtu.be/WSeNSzJ2-Jw', 'https://youtu.be/AOEOsEgp6BI'],
                          '30': ['https://youtu.be/_mTRvJ9fugM', 'https://youtu.be/nDUw3OQCTpg', 'https://youtu.be/VNsd8Yo5zvc', 'https://youtu.be/Kp7eSUU9oy8', 'https://youtu.be/r4l9bFqgMaQ'],
                          '40': ['https://youtu.be/GuPGZZgNFsU', 'https://youtu.be/yteXdnQQSUc', 'https://youtu.be/Wp_S_8VG96Q'],
                          '50': ['https://youtu.be/PZlfkSjzG6U', 'https://youtu.be/gz64trDyssc', 'https://youtu.be/aQkPcPqTq4M']},
                  '2020': {'10': ['https://youtu.be/fHI8X4OXluQ', 'https://youtu.be/q0hyYWKXF0Q', 'https://youtu.be/ow1QqW0jzTo', 'https://youtu.be/zABLecsR5UE', 'https://www.youtube.com/watch?v=gdZLi9oWNZg'],
                           '20': ['https://youtu.be/VF-r5TtlT9w', 'https://youtu.be/pok8H_KF1FA', 'https://youtu.be/tcYodQoapMg', 'https://www.youtube.com/watch?v=9HDEHj2yzew&feature=emb_logo', 'https://youtu.be/uLY2M8Woco0'],
                           '30': ['https://youtu.be/hGirXOIssqI', 'https://youtu.be/WJ9-xN6dCW4', 'https://youtu.be/yDeIAllUAWc', 'https://youtu.be/ziotSaBtqGk', 'https://youtu.be/N541HLPeG6Y'],
                           '40': ['https://youtu.be/j7QOKDNeBKQ', 'https://youtu.be/JuklRMZj7CA', 'https://youtu.be/TbJE-KVZvTA'],
                           '50': ['https://youtu.be/-jvkHxmeNXc', 'https://youtu.be/ASNBFzNHCAs', 'https://youtu.be/ZzyH1r-jya4']}},
          'rock': {'80s': {'10': ['https://youtu.be/1w7OgIMMRc4', 'https://youtu.be/QkF3oxziUI4', 'https://youtu.be/lDK9QqIzhwk', 'https://youtu.be/811QZGDysx0', 'https://youtu.be/5IpYOF4Hi6Q'],
                           '20': ['https://youtu.be/SwYN7mTi6HM', 'https://youtu.be/tRx212PUa4g', 'https://youtu.be/zUwEIt9ez7M', 'https://youtu.be/YoDh_gHDvkk', 'https://youtu.be/9f06QZCVUHg'],
                           '30': ['https://youtu.be/eqyUAtzS_6M', 'https://youtu.be/N3oCS85HvpY', 'https://youtu.be/iC8oP4Z_xPw', 'https://youtu.be/FVovq9TGBw0', 'https://youtu.be/e3-5YC_oHjE'],
                           '40': ['https://youtu.be/OfR6_V91fG8', 'https://youtu.be/B0jMPI_pUec', 'https://youtu.be/yBuub4Xe1mw'],
                           '50': ['https://youtu.be/j7oQEPfe-O8', 'https://youtu.be/JpMt_YqVbhw', 'https://youtu.be/XycBLF6kWuY']},
                   '90s': {'10': ['https://youtu.be/hTWKbfoikeg', 'https://youtu.be/CD-E-LDc384', 'https://youtu.be/v2AC41dglnM', 'https://youtu.be/qM0zINtulhM', 'https://youtu.be/FQV7sGEtq7E'],
                           '20': ['https://youtu.be/SSbBvKaM6sk', 'https://youtu.be/bWXazVhlyxQ', 'https://youtu.be/crOZk88eCcg', 'https://youtu.be/sYffFEIAzdE', 'https://youtu.be/3mbBbFH9fAg'],
                           '30': ['https://youtu.be/Nco_kh8xJDs', 'https://youtu.be/Kjr7US2Z9aY', 'https://youtu.be/4aeETEoNfOg', 'https://youtu.be/V5UOC0C0x8Q', 'https://youtu.be/XlTqcshkmc8'],
                           '40': ['https://youtu.be/_nGsT_qFMBs', 'https://youtu.be/1y5DBy9KF-0', 'https://youtu.be/Efa6BAWPm9o'],
                           '50': ['https://youtu.be/5xUot8mHS8E', 'https://youtu.be/7jI3C1lgIQ4', 'https://youtu.be/EMT64q_2fM0']},
                   '00s': {'10': ['https://youtu.be/kXYiU_JCYtU', 'https://youtu.be/CSvFpBOe8eY', 'https://youtu.be/96MiYk9VYvc', 'https://youtu.be/6Ejga4kJUts', 'https://youtu.be/7QU1nvuxaMA'],
                           '20': ['https://youtu.be/RRKJiM9Njr8', 'https://youtu.be/5abamRO41fE', 'https://youtu.be/0J2QdDbelmY', 'https://youtu.be/Hm7vnOC4hoY', 'https://youtu.be/vc6vs-l5dkc'],
                           '30': ['https://youtu.be/xQ04WbgI9rg', 'https://youtu.be/qv96yJYhk3M', 'https://youtu.be/PXzuDXZwZtI', 'https://youtu.be/xwhBRJStz7w', 'https://youtu.be/T3rXdeOvhNE'],
                           '40': ['https://youtu.be/b8-tXG8KrWs'],
                           '50': []},
                   '10s': {'10': ['https://youtu.be/H3Kzh6RrnMc', 'https://youtu.be/iO_WxYC34eM', 'https://youtu.be/XFkzRNyygfk', 'https://youtu.be/bpOSxM0rNPM', 'https://youtu.be/_oLzX0RPquk'],
                           '20': ['https://youtu.be/r5EXKDlf44M', 'https://youtu.be/t0imaSCnSuA', 'https://youtu.be/J1H2_VTGtk0', 'https://youtu.be/7pzOBI3PD8E', 'https://youtu.be/mtf7hC17IBM'],
                           '30': ['https://youtu.be/ahvkAPbPGKw', 'https://youtu.be/1uYWYWPc9HU', 'https://youtu.be/NZ3bWFao05k', 'https://youtu.be/QLMN5bU3fFU', 'https://youtu.be/u1V8YRJnr4Q'],
                           '40': [],
                           '50': ['https://youtu.be/gS-bqTWOuKI']},
                   '2020': {'10': ['https://youtu.be/P3cffdsEXXw'],
                            '20': [],
                            '30': [],
                            '40': ['https://youtu.be/9FpkHjJTrZY'],
                            '50': ['https://youtu.be/ukgraQ-xkp4']}},
          'hip hop': {'80s': {'10': ['https://youtu.be/TMZi25Pq3T8', 'https://youtu.be/dLB0P8nT2w8', 'https://youtu.be/AdHLn_iHTSs'],
                              '20': ['https://youtu.be/9vQaVIoEjOM', 'https://youtu.be/b6aAFkP0BGU'],
                              '30': [],
                              '40': [],
                              '50': []},
                      '90s': {'10': [],
                              '20': [],
                              '30': [],
                              '40': [],
                              '50': []},
                      '00s': {'10': [],
                              '20': [],
                              '30': [],
                              '40': [],
                              '50': []},
                      '10s': {'10': [],
                              '20': [],
                              '30': [],
                              '40': [],
                              '50': []},
                      '2020': {'10': [],
                               '20': [],
                               '30': [],
                               '40': [],
                               '50': []}},
          'bollywood': {'80s': {'10': [],
                                '20': [],
                                '30': [],
                                '40': [],
                                '50': []},
                        '90s': {'10': [],
                                '20': [],
                                '30': [],
                                '40': [],
                                '50': []},
                        '00s': {'10': [],
                                '20': [],
                                '30': [],
                                '40': [],
                                '50': []},
                        '10s': {'10': [],
                                '20': [],
                                '30': [],
                                '40': [],
                                '50': []},
                        '2020': {'10': [],
                                 '20': [],
                                 '30': [],
                                 '40': [],
                                 '50': []}}}

genre = input('Enter genre ')
decade = input('Enter years ')
difficulty = input('Enter difficulty ')
print(random.choice(mydict[genre][decade][difficulty]))