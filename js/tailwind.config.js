tailwind.config = {
        theme: {
          extend: {
            // Color part start 
            colors: {
              headerColor: '#160C6D',
              btnColor: '#1BBF00',
              BtnColor: 'rgba(25, 191, 0, 0.507)',
              coColor: '#141135',
              CpColor: '#4F585F',
              CColor: '#726E9E',
              whyColor: '#726E9E',
              serColor: '#141135',
              seColor: '#726E9E',
              sColor: '#F4F4F5',
              hoColor: '#6B62C5',
              HColor: 'rgba(250, 250, 254, 0.5)',
              SERColor: '#F6F5FF',
              
            },
              // Color part End
              // Container part Start
              maxWidth: {
                HeaderContainer: '1170px',
                bannerContainer: '962px',
                coContainer: '1209px',
                whyContainer: '1147px',
                chooseContainer: '558px',
                cHooseContainer: '1079px',
              },
              // Container part End
              // Font Family 
              fontFamily:{
                 Papri: ["Paprika"],
                 Open: ["Open Sans"],
              },
              // Font Family 
              // Width part 
              width: {
                '128': '32rem',
              },
              // Width part 
              // Banner image 
              backgroundImage:{
                banner:"url('./images/bg.png')", 
                cort: "url('./images/bg(1).png')",
                whycoose: "url('./images/Why choose Us.png')",
                counter: "url('./images/counter.png')",
                coose: "url('./images/choose.png')",
                
              },
              // Banner image 
              


          }
        }
      }