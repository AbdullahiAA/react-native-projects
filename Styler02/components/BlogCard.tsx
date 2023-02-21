import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function BlogCard() {
  function openWebsite(url: string) {
    Linking.openURL(url);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>

      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            What's new in JavaScript 21 - ES12
          </Text>
        </View>

        <Image
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAACKFBMVEUeHh4tLS0eKiT8W0H///8/Mnr/W0EAAAD23vj/zEYaGxm8tt7+lzb/1M3k4P8rKyslJSU4Nz4dIR8yJmYAGRsJGx0WHR1QKSSXPS+NOi3VTzqMd3EKIBr/lqkQHB31UDpDQklwMSgpMy0aGxHe3t4LCwuGhob8VTkhEFsAABvIwu3sU0cUFBT/nTfyxL0yND4AFR39mYzz0d6qYySMVyjUwt9xSCX/kx/8Ti89MXX/1Ujt7e3s6P/sSz3+0cocKh6YWSFeXl7/pC+dnZ33qngACxxPT0/GxsaUlJS+vr7qx+0AFgCwkTj9hHJtbW2tra1RPa8ADAD9eWX/7+39s6kuJ044MGpoaGj/sjXr0+3pyfP7n6Q0L14TGGkkIDXHoDvHfTHjiDP/45paSybdjyz/2WkgHyiMipttTFD9oJT/eDz8Z1F6bGfgt7AxLHzAoZxKOySrjIgnKEVcUE5sWSrkt0Harz+ZfzJMNCFVOiNILjO1bnrghZYrGR/sfpTtg0CIZS6FS1bhozaiWWj/3IP/45wwJx4iG3w6KrJtVZ6hgWT/0kD/1l1IN5bNpFevi6Tqr8yzpbZrP3NMMV3EaTHHbIqITXqWlKatYX50anj/rcDJxuCHeIquQzOeb3mNiaVfXW9ISFrTtoj02K65gTKebzEAJyzaljbWl3L8QBdlW1VuSm6EVWmjZFuzmsqHcabHqNVuSjyWWVC4bEkTCDYAAFG0YgAOBSusm2gDAAAXuklEQVR4nO2di18TZ7rHQxgdiNEEgtlaAqYkIcUOGOsNCIUCTUgEwSgX8VAKFUGLVEFttfZYu7rYLt2t9rIeqmd1t9Zu3VtPd/ecf+887/vO5Z3JXN6ZpBBYfx8vyeQyk29+73N55xKX67me67me67meqygSUk1NqcR6b0XJyI/kk+XXf1aw6fTAW28NXG4SnK7HR60D5PRtSkF+X5lW+p8ndfFKeyWo/crplMN15a3J6BsqcekwM8KWOI2hYXCXHXLTW9nGI+fX+xiGbqtU1H7R2QoN1rehyOkazRBbaqCd4vZWk6NVGq7R4JsqPRk5zegzNF2ppOUsK5is01fYx1kjGVvN6KtXUXM4Ss1WWlbQ51kbmVLTxeb/2bGVPjdzavqxTYWt0lksMl9tqXOzoKYf296iqV0pdkrAKu34ZpYNDLEJp6lM2n7TWYflZMUlI6uN19/6JqUCaXdYfzhcc2nI0mwGG9/0lsTtPYfUrLGV8DC13Haj77zpvYICG9Oqnb7zzy4zs4kzE0ZDJUiG6LLjGRBxpmUj2s1go30M8zhNAwUNUVp+/UmE0rWbPjOml6bebwcNOJ020krX9yWaFPS2lXVkLE9hXS2FbVlj6YwN5i848frU/v1T+4s4K56/NaWJTecLtjMskNmWg0XcnnxuRXzz4ikfm52vt/7a9PSB4u6C2RjBrcBvNzg1fbWYZtPZoJIcpYVuZSJVXGr59i9JbKU3JjYmtvXeoHz/r/cG6an0vtu8UbreG6SjEowkeZu07mEjX6W4jSW4SVoVjK3IeRTp3wBb/dnib9MGxGYztAU/qLteU+xt2vzYam7VfZhzvvZgTb3OUm0Fsvmw5b4uBFvwP198Saeh3fzYgjcKwBbs+uidd27mz3FuemzBDwrBlrqC5obzuW1+bGcLwCbtL8ybrvt5sMVcQsxj8RSe9c0Kw1b/8Y266w6xpS6Le1l/qd2DUzA23uWPuTxqRkIj382Z9GkxwRXL9LJyKwzbzls36j7mayy+RH01VZ65fQZzO6RJCw6x8SByq4/jBmNVYXo3ZCzDjWWTOq+K8YIHXsdn0jG+jxtk3HVZGLYawHb9+i0nrULq/fa3b+vbzRE2gR9KJjOYWxlgiwIDyjo8H+Uak2AmcRwKvAeWASO+MZt2cVG/j0t280kuvWbYkD6wz63pyu23pUNIrqlf7gQbn+ay8LG7BYEXBBfCxnFl8igQkkMcqFvgG4di6H66rwp7i8+ixfC6NPwXSybXZpBK2OynBeH0imS2ysopdTJ1gI0f5Pp4YJDlAYggcFx2kBMZoEQgdPdxycExP98LPNHTs1wfWLKPH4tGe8GGHLyec3Un1yi2Sdjs2y018NmvPpOw9RSKDX1qCFFDAGUIcAG23iFuiI+hUZhu9AsQuoAoeC0JS9HzuWQ0meQa+b5keig6CNga4WVDWdbQVoSUgHXLbmPadOWMPEYrTy6rHrONTQgDJwjrvfDZkxxX5YJA1ceN8ZnBGPDgOL+ARmRMqOKI2YQ0B6GO4zyDcD+ZzsC/6G80G2Pd/MILECzbVYh/5fbtypUrv31vBWFT51Lb2CDeo/iP3JZGsSrM9Y1FObQ0XBXlhrg+P9z2e7ClULwDvlxfIwLF9UUHgXQfYO0TOOYxWjC2OhGbTbcJp9vfPrNSe+fOJ5+i4/S/KwibAEM0i7DBZ8chfpDLdif7gA3HDwE+8JgAwPjerBjv4IlceIjrBca9EO+SXBaSCDzfz1xJ2cZW7QZVi3dQc4V11mZsS91s/1X7r+9sOXbs2Kcr2pxgFxsyTzcKYxC5OGSxXi4zCDeHcD4dErjoUBoM5UpCSMPZFVwW5bPRNDw3w49xZVw0mcW3mbffLjZMTQFXj7F9+LHdMZp6/7O3V+60AbXffPJeodhijXiMenxgOhSyyqJcFYQ5MFcvBL1ugDWWgVQwlEXFGwpf8P8gnwVUg6gsaYTAluR9WRvU7GKTqEngctcRNV5v1sxUqYEztyvv/AaoHbvz28rKmYKwQc0ahX+FbhhpUYQNF7sotqXBhyiiwRjsdYH7MmL9McTxwDrp47uz2W7IJR7e5eGZ84HLNjY3LReepnRStSFsZ1aQ145tuXOlYGyk9keJNNoIoBrBS5AJPFEOKpFoGRgqE+WyyYyPlLxoDWC6WBjqYgG3CvZVCDYwXO7zu3fvHrHhblGA7bOVxU+A2rurK4VjwwKHQfwHbFEI/30c9ExJyBAoWXLIdlk+Fo4mo2Ec9nGrYHurFdnDVu3WKPf5EVCZ7V4eqt3KypXFY3ferUWFW3Gwcajuz6BoFUPDEBwHJSwsCvdlULOOOlGedzTtkKcCsfV/Pj4+XrFq+4uDRh5orVReqVwpFjYhjcM7/IurjCR05YNlAsIl2ApbTCocW0VFxZzt4EawyV1CYZmUSBgDbNBGNSZJtgRbCcWxlo6Kgu2e7eCWuKzC9qSwLgELuQ3lyVjxvZWvomAbt41NuKjCVliXIArSQNZ+cnKmomCraKg2fZmOgvTpgScPqQo/p5Pi/Fh3IdnRjgrF9ugIwrYacttbbeIQja1nfzEyKXh4ragVii30EGO716/0qWzqUWFrvkbbbdPt8NPDhoNbP7rDvtammZ6T1Bjt8Xrp4PZvgG0Vu62iAd9jNVziQE9PD202bzM9TDc/tq70KZwTHobcNsAt92ixeZuprLD5sbnDeJDi4KYB5zGsNRNPTgK2k/QY9XqnFbs5xRa0Kca31VOh2NxH8Cgdl7HJ3EZGZo3ApWYQtnbKbF4v9bBDbMu/sKll6/c0UqHY+gm2ijS1DMBFZgOgWaP3SQC3Q9+fJOpZ9jZ76QNBnGHb+UK5Tb2wk42RjgrG9iPBdr+fXuoZQdS++NLIbkH/zNXU1Zs3v/pq/82b1xLBqWuFZ9KdL2y1R23rrnXE9jkJbgd5JU24lxC0wMtf/8541jcVdAUTiRfLdyUS4LOEKs5osbmYOvINhQ0qEIyt4qFsN+w00OiNLyyi7s5d5XonVWqw+dN+llZzQ2FzN4jYKgYJt9mApK9vmLgNK/iL1/R2FKqxVd/v6Jhj4LaxsEFwE7mt5tB9kdnLX3xYV/dfVntPd+pGZQ22uY4dHY+tu82NhS20ekridp+Xsf3ua7wj0HKns+4oprD5q6tzCNt96zm0jYUN2Y0kU8gLIWgWJpcmb4n76uvOhpxsk4LN//j+3NyOHZsRm7v/nsxtPN3v7urqcp/F0F4FbDYnRrB8fh+5KIgv3AFC2Bj2Vmw0bDS3ijkc4ELA7W4HV/dBl9vujBLI83jPtiofyQY7iBgm0jYcNrzbT+J2sKGfcPvm1W/qbuEOX8Wt3lQo1nnCe/bseVQNG+O5R7B1sOzj2XjYgNspmVvFQ5QZQmXX6+puoFGKpLxD8CVzAbfcI8C2LYJC2yrB9qDk6jZtRe4Mmzv3UM6nYDg3gtV/9gbUIOLjkuFqLD7bf0Pu5bcBtj0IW1mE2I3pAKo1xVZWHGzu/tUjCreKVWy4D1EN0h/C6s/lUDLcuXurmcrRICXYILj5/f4cjm5M+6PWFZt522yMzd3/mOZ2MNzvDv0epdPfD64+nJubu3///kPeVbPLlNrWF1Chhwfpnke56scPV/25BxDamPbDbkxs7lCY5lYx15/jEba78pLxOb7Gwmz4c3h82G7kHx6KXSjbSq25Kh42d6jhoJJQEaaDd1HxpjiwYpXFbMCtDPsNK0xSKQO3jYqNFHCU4YBcXZ1yH25ZmE3qxXyRxxI2sW7rWLXktq7YzJ9tgU2dUDGob+h737SymA2l98gjGhriVmWVTdcTG/sxqAZ+g4RKDVR6zIJeYzMbFJMY2w5KHZa120bGFpqePkIb7kgFZT612XZrRmz5LgWbP6yhBtys+qv1xGYxbW+J7aLX6205pUS48SNGZtu9W8OtnJplimzLxxa2GKXric3i2ZbYnk57vYffOKWAMzLb7t0abuXUh/BU5VHb0WE1dbSO2FjPSjDWNbDb4em7wE2dU0GvaM2mxkaZTXicbzbLEmQdsVntWrPGhuwG4IYhwmnygTayGZtNB1vHA8u2VBeb+ObkdhxLFxs6GDpGR08Biw0b25lDpgod8mJu3mEtN5XZ8rHR8+cebUboeOD3WQUQPWzzx7HQzXjr/L7h4eFzR+OtcS02nh/LDA1l0srhq0Iay5CbLbMRbDWinj41thsynKqEq7jbmofNyGzQlm5TYet4EPFZbp4Otvg+DutovLz16AlO1PbjrSpsAj8kPpJslCJBjNw3DAy2qGFspweI3n/yRI/b09e9IjdVBacxm1aaHX/qUdpxLyfOb5ldfNoUW+swR2m4lcImlCWVR/oIKBFklAUbwzEDgG2neGh8+8meniY9bg0iNu8btN3umjYI5S9pojP/SMHWMZdj2UozbK3nOJXOxWVsHn+SfiSLTmPA5+4yYmM50gJhkw6NB2wz3+lwezol2e1Vasr3lbgNs7nIpJvUjkaYhoQpthNqbJyCDZ3URqusbCwT5ZixMR2fggepiK2n50nTzEUdux2S7Dat2M2m2VzYb6LXVNScYZsXB2d5+Tk52hFs6ERwpExaDHCNjQpCa2xsR/XglCCb7Wbqez1sUlLAWUHEdtym2RC3P2xD2B7ws7O+QrEdlVwX/+GEPEoxtlgG3+/lBdF2vTawsZ7qjbAl8E9y/LKnp6fm8kyNWVKArEAOUbUw21Yds7lciZsDf/z222//ODDw5LKvONi4zn1xUpTMS4NUDP5hQRqtNtzGfHAswoaDGzqKdGZmpkGvBMGNqdf7Duho3X9gze821Qt6h9hIvxHYXnnypr9AbOUKiu3nylvjW+VMyvdGkXgX300erxpE9xmw2biqAB6kiSfoiOWemUSNntdANWiUvoPKsngrkekQBQV1egD5/KKTPfXST786TgmddNQXCzcxJWDhK4kg9fGoYeCjDG4zM1sMHVgg/oG/DUhPv8NJtMFI7gNeb/M7xEiv5Ok1kHxDlLIO5Y8/9T3RzJO9Uhfjd4gt3rqd5saday1XNVdyxZskfQITNhO/CbXbjdWJZfIEBzJ/y0s+JmyiybequgQVuONxVXNVJdZuUY9gA5vJd1hWa6iFFqQFvYf+9IasV7VaNH5H0/dE8jG5LX7uBNa8Mkjj8dYf4vuUodrZSmGTqlvIp2KwYMVmbDghRqk+pCiHTdGymAvlqebAYTmZtpzSzCDN5b9AXgdf24Jdhe8I1X6t2GJbXCzOFGzDWNDEH20hS04o2ISYWPBGq2RKzNjYEgM1AxI6j8dUi24ylRsskDxlKdK71699tnJojcfXgr+M2pjhz2/ZwHZc6qmOyiMz/gPhtl3GJkjNVYYkB489bEzcKGy5BWy2Czk9bHLFS2peld8O5mHzKOIvYLst8IY/uMaCTTTZiX1iTyU2CSfmW1vnyaJhObbxUljL9GKFPfawMbbysqGI2Z6F9LCFDqjtRoMbl0B3EfknJ5eWRoiWRi4Ru5V5DKixYNs6z6n1Q6dmAXd8q1S3ZTSP4DN57WBjnDgSweAU27KgptYl6eLhw82iUHTD4CRyOfI83+TIxGhb2xa1UgvYbotBXWaME0eacmO4Vctxu1yAiIAKwWb9ew4Kthz+dC21IZqYb+/SxMQosGjb8i6obfTLP//l47/+9W8/HpF0cHx8vKvLvTQxukVXozmSFFrq9aCZbhuFTW23ExDSjqrQnCjfKmPT+tABNhuT4mn84VpkZj4DEu+K2vLp3/9G8P04oXUYpUlPjIzSZ/kZwWIw0OVufF7xWydqpeLz1DhtoZorlz62pB1s7LtgQouk+iBm22tGQgXw07+bPqct4ootYrtdyBulVl+pqkvY2np8uHP7ie2d5+bFGfDW8n2wZHvn8L7yVvE5GFujRlXovYRBfNv4mot2hgGFDRdtnS3kvL4ugxGnT8aM8JLH5SkjdtNiswy8muZK7IfjlAXxEmXXFcEW04i8GakkGfdcMe9eJkVbywJJil0jTLysmGGzwQAhNch5vz1q6MRIiwkD7eTomh/MkLuAzXaejNGuvWwus4CGIhusQ3hGSjdVUmAoKut3vWhTL9m+7JwRNsZDZ0IkIUhptEuBE9BH04aktzgQUO6NRvBKeFKDlDHN6dLcamzKOTVn2MSibVHGpgS3QCCgwye/PsOIkagF4kpipAZZrLZltrWVBhvbYYG4saLaUSq4ERZWw7GtTTp7klo4Qszm8vhxUmhJ2DPbmsoRtgZtO0oFt0BgYsQUnYJMTa0tIq0lRpLCJR/jVq2DtNhYjt3FRZuqHe1SEAGUWfEE5tHRUWp04vAWUIsmS13HgTSmSulWcmPUETbcWKna0a4J2m4B3D5Jp35jeiC4RQt7UmeIgvz1OCl01rNt1HrI3lUQMLbQM007CtgmqcEWCEyidiv0Pz99+eabb2r8FUCLJkYmPRGjIYqOQa1Vl26lj43h5KHQBbod1ZYgOLp1ud1P9zc3N3s/+sdPf/kSoUJ6N/Dln3/6x1fTzc0eT2TEcIjCNpGkcKG+VMeokzP8QurqI2+Ugt3wsotI106fPr2/2eudnp72Hrh26Bro6tXloGvWcIgibMFFunTbFNhw0Sa1ozI2ulEIBJa6qMekvfTNhxLyxYU8amqjNDXA5ktju9VWbx5suGjLmwyncqk4SnWwyWW5Z0m30BUFHqvHNYjYYG0KbA10O6pgo9p5aZSKqsnH5lJTm1TvlEe79c5TpVvpZQT72HDRpp0MB/lUo3RSXl7tSuRhi6iLD1Vgc5E0FcQ1CJkb3wzYSNG2mIeNnnQLBEa6ZGo62NT5YFRDDWOrxjUImRvfBNhClwz2jqpLt9EuCZoONo3Z8g6bQdh8ZLbymeke5fWTbWy4aLugs5tP3WDhReRF+W5TUZvUxVYWxEkBl26bAVun0d7RriV6lM4qO9u12Dwqsy1ph6iIzUcaU5/ZYR/rJ5vY8Gy4NBlubDeo3JSLWORho3v4iXxqYudSg5NCrdmxWesnm9hI0VaruyteNes2ogw9DTZVzdamQ03ERhrThZ2bAVtDfjtKcaODm8JDgy0ySplN90KAYp9cjUdp2OSQtvWTPWy5Wv3qIy+6BQLKixKvN9PY6OojPx0gidhIY7pYvfGx8S357ahudKOvghq8OjU17Z2emsIfn04IOukASTpTKIzs1pLY8NiEsHFCUNsN+gTlZcFE0/7mA03kYqcRJSHopQMkaTKLNKaX/BsdW2xRrx2luUmtgionwDgFbOIlYpUxmtcdSJKw+fEe0wvBjY6N79RtRxVVz1phQ3mUmK3N8MRaeeqUNKb1Gxyb8MwsIZCrO0vTlQHVCFSwRSYksxlfTVfGRhrT80X6qMWUHWz8BcODdZHwczxtUnAzwCaNUf0kiiVjI43pwhr8JI5d2cHmMWpHRavh50yaY3OJY9QgiWIp+zdIY1p6u0ntYIvVGh+sq7RSkRExuNEvVbBNErNpp9hUUrCRxrS29OxmAxu/YJgQ6KtPRkYJNvry9TI2yAhtJqUHEbU3De8xXVirn2FiFzs2T5lRO6q51CkJbwbYRgJmpQcRfRokTgqX1uwXhVjFjg0VbXrtaN71YT24CqHrXQ0249KDiN53ixvTxZKzGzs21FjpVB86V9XFaSGwRMGRsUUm2ra0WW0TjQ03pp0lF9yYsQmXdNtR3WsRR4Cbqt5VYTP8rRNJNDbSmD4rtVHKjA0VbXl7R40u4Azc2uRkmUikSE+aqEfl8Kx5YHNpDrDAjemFUhul7G7Lb0eNoHkis2gqEhe0idTygf1T6BSs6an9h5Zh+cSSK2LuNxU2sseU7Qc61k6s2ITzqPrg6Ysc6T7PE4lMSj/PAbk0dWi6uVk++6r5K3IA0ujIrBk59eE8eHK81Eo3Vmy4aFuMKWcm6D3JE3FNSse1IXnqpxVmQO0j6rCtkcmIETrNz0zUlmDplotoxOtrGY1R9GCuHymn95ymf76s1r/+9zCt6X+pH/7n/+mvS7tJKCksG2wXs4pr122swhcPtquDKjl8E4ev0uhRUblVhTWqMtDevVV7jR4z1F61GF+Vt0nsLzVWcSftqn1q+T3rL//PsU1FpWZzF8zaaNP9YuTa6Dk2Ryp9bP8P0dFrKOfXXCUAAAAASUVORK5CYII=',
          }}
          style={styles.cardImage}
        />

        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.links}
            onPress={() =>
              openWebsite(
                'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
              )
            }>
            <Text>Read more</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.links}
            onPress={() =>
              openWebsite(
                'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
              )
            }>
            <Text>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 1,
  },

  card: {
    overflow: 'hidden',
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },

  elevatedCard: {
    backgroundColor: '#EDBF69',
    elevation: 4,
    shadowOffset: {width: 1, height: 1},
  },

  headerContainer: {
    padding: 10,
  },

  headerText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  cardImage: {
    width: '100%',
    height: 240,
  },

  bodyContainer: {padding: 20},

  footerContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 10,
  },
  links: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
