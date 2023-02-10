import { Link, NavLink } from "react-router-dom";

export default function StudyListItem({ propData }) {
  const slicedContent = propData.content.substring(0, 100) + "...";
  const firstcourse = propData.curricula.map((e) => {
    return e.course.title;
  });
  const IMAGE_ROOT = import.meta.env.VITE_APP_IMAGE_ROOT;
  const image = IMAGE_ROOT + propData.leadUser.saveName;

  return (
    <>
      <Link
        to={`/studyDetail/${propData.studyId}`}
        state={{
          propData: propData,
        }}
        className="min-w-[31%] max-w-[31%]"
      >
        {/* <div className="pl-3 py-3 flex flex-row justify-start items-center gap-5 bg-white border border-[#eef1ff]/[0.98] mt-2 rounded-[10px] cursor-pointer hover:border-[#7b61ff]">
                    <img
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQUEhgVFBQZGBgZGhoSGBgSFBgZGxgYGRkZGRgbGBgcIi0kGyIrHhgaJTclKS8wNjQ1GyQ5PzkyPy0yNTABCwsLEA8QHRISHjIpJCkyMjI+ODIyMjA1MjIyMjIyMDIyMjIyMjAyMjIyMDIyMjIyMjIyMjIyMjIyMjIyMjIyMP/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgECAwQFBwj/xABAEAACAQIEAwUFBgMGBwEAAAABAgADEQQSITEFQWEGEyJRcRQyQoGRByNSYqGxcoKSJDOjwdHwFlNjc5Oi8RX/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAjEQACAwACAgEFAQAAAAAAAAAAAQIDERIhBDFBIjJRYXET/9oADAMBAAIRAxEAPwD2aIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCImnxPGChRqVWBIRC9hu2UXAHUnT5wDbieMtSqF2qCo61nOd6lOo6F256qb5RsF2CgDYTo8M7aYvDsFrkV02OcKtQD8rKArWHJlufxCa/4yzo515Mdx9HqsTmcF41RxVPvKLXtoykWdG/C68vXY7gkazfqVVGrMB6kD95kbp6ZYmsuNpE2FRCdrB1J+l5sQSViJz+I8WoYcDvqqoTqF3Zrb5UW7N8gYBvxIZX7b6kU8M5HJq1RUDdQEDn6gGb/AGc7Se1ValN6Ypsqq65aucMhJBOqqQQbX0PvDXkLOEktworIt4mSWIiVLiIiAIiIAiIgCIiAIiIAiIgCIiAUkX7e4jLh0TX7yqiG3IIGrXPS9ID5yUSEfaBVPeYdOWWtUPqppKv6O0tBbJGdjyLIus18VQDjrymwsqBO081nJo0ayt92zoxGUvSdkJW97FlIJHSdJMAB4nUM5tdmALG3mx1M2qLgStWsLecq+2Wj0vZqVMPTIsUUjyKgzJhKj0bdzUekALAU3sg692bofmplsvENJ+wpNejof8V4yomUMqLcfehLVGXnZDdUvp4iNr2VdGnKWiAS2pZtWZmLOxGgLM12Y20uSZllrGRGCXotKyUvbLgZs9h6l+K3H/IqqfQvSb91E59Z8qy/7PXLcUU/9Oqfl4P9RE/sYq+9HsURE4z0hERAEREAREQBERAEREAREQBETmcU4zQww+8fxHVUQFnbW11Qa2udW2HMiAdKeYcax3tVbvgxKAFKS/D3dwc/q5Gb+HILXBm3xztXVrKKKIKSVj3Ld4c1QoysXCmm2Wm2RWsQX18rTn1VJsiLmd2yIgIGZjc2vyAAJJ5BSeU2rjx7ZzWy5LijSdwu5tqAOpOgA8yfKdPB8ExVRcy0sg3BrsaZbTkliwP8QWSjgPZ6nQs72esRYuRoo5rTU+4vmd2sLk2AHbYWkSvfwTDxl8nlXM8iCVIO4YEhlPkQQQR5iVMkfazhBBbE0lvzrIo1YAW7xbbsAACOYAtqLNE1xiHUa8xabQnyWo5ra3CWM2wJlpYWs6d5Tou6XIzoFN8u5VL53F9PCp12m32f4UcURUqArQ9SDVPkvkm9257DmRPFsAFUAAAKAAAABoAANhblMrLuLxG1Xj8lsjzBKoYacjlIIIKkbhgdVPQ6yoWTvinBaNfxOuVwLCollcDWwJ2ddT4WBHO19ZCONYd8KctW1j7jqLK/QX91rfCT6EjWWhapdfJS2hwW+0cjilewt8p0/svt/wDoNci/s75QTqb1KNyPOwH6yL4isXa81K/hKuCQyspDKxVhclbhgQRbMTNbFscMapZJNn0lE8c4J27xWHstT+0ILCztaoo0HhqW8fM2e5J+IT0vgfaPDYtfuagLAXam/hqL/Eh1tfTMLg8iZySg17PQhZGXo7MREqaCIiAIiIAiIgCIiAUmpj8ZTo0y9Vwii12bzJsABuSSQABqSQBNTjXGqeFUZrs73FOmvvNbc/lUXF2O1wNSQDBcZi6ld+8rNmIJKqBZaYItZB52Ju51NzsLKLxg2ZzsUf6dTifaatVOWiDRp/iYDvX15DUU1I9W1+AicLJluebG7FiWZjtdmOrHqTeZ1MwVm1nRGKXo45zlL2a7Ad7SJ5O1uh7tx+1/rJZ2WoA1KlQj3LUUvyuqu5Hrmpj+TqZDeJ5hTLoCWQrUAUXJCm7ADzKZh85Lew2NWpRqEEG1W9xzVqdMqw6bj+UzO/7TTxscuyWK0ozTSrY8U2s6OF5OqF0OnPJdkt5sAOsy0MTTqC9N1cbXpsGH1BnHp6GGQtI9iuyOGqVe8syqTmemhARzzuLXUE6kKRf5m8htKASVJr0JRjLpotRQAAAAALAAWAA2AHKXiUvMVSuBIBfVewnH4nSWtTalUF0YWP8AkQeRB1B5EXmxWq39Jq0MQlQZqbhxe2ZDcX6EaH5QDyvimBahVekxuVsQ34kYXVrfoeoPlOfi/cY+Slvpr/lJp9oNNQ9BviK1EPUKUK39Czf1GQuuLjL+I5flu36A/pPQrnyjp5dsVGeIzAy+mSHVlJVlOZWRirKfNWGoPpLCJtYGlmcTT2Y7no9C4H2wrIFGKBqIdDURAHTq6Lo676qAw/C17id4bEJURXpuHRhdWRgVYHYgjQzyhFsLTZ4TxSrhGzUvFTY5nok2D33amfgfn5Nz1OZeeyv5R1VX/Ej1aJz+E8UpYmn3lJri+VlIsyMLEq6nVTqD1BBFwQT0JgdgiIgCIiAUnF7Q8dXCoNM1R7iml7ZrWzMx+FVuLnqALkgHe4pj0w9F61Q2RBmNtzyCqOZJIAHMkCePYji71qz16oAZ7CwNwiC+RFPNRc66XJY2F5pXW5MxutUF+zpmozM1Wo2d2N2Y+QvZVHwoLmy8tdySTerzRTFKZf3623nVxw4eem5nmu7TEMQvnMdTFKP/ALGEOSNlTNPgeKPD8U1S39nqgK+W5KWJKkrzAZmtbk5HIA434h5TAGqVWyU0Z2tfIgubeZvoo6kgdZE4Jr6i1djUlx9nq9HHKyhgQQQCCpuCDqCDzEx4lKNQ3qU0cjYuisR6EjSQ3s9gsXhlObKU3GHDAshJuSjmygnXwaqT8Q1JkVHEI5IU+IalSLMvUqdbddjPOksfR68Xq1rDpYYU6d+7VVvvl6bfvLnxY5Tg4TDPRzAKHViGvTCo5ewVncMQGJCrdr6nlNg4xR7yVAfIUXb9UVh+sgG7UqlgQdjpuR+o2mk2CU7tU/8APW/fPAxoJstOox/7ToP6qgUfrNfhuHqKzO9lDgEopzeMs7PULWFicwWwuLINTyA2H4dSb36avbUd5d7EbEZ72mzLc1tSbAaknYDrOdXxL1AVpMUUj++AB3/5QOjfxnw7Wza2Ah/bbHrUxCopBFFWUkH43Klx/KET5lhykcRNSx9APIf6n/IeU6/FeA1cPdm8dPc1Fv4fM1FJJXf3rkcyRNMUp6NSXFJHk3uSk21hhUXNp3eHYXKLneaeCpoDrv8A72naS1tJd9GK7MgiWqZUGQXL8Ji6lCqK1AgMAFdWJCVVFzle225yva6k8wWVvSuDcVp4qkKlMnfK6tYNTcAEo4GzC46EEEEggnzHLNnAcQqYaoKtO52D07gCqg5a6BgL5W010JsTMrK97R0VW50/R6vE1OHY1K9JatNsysLg2t0IIOqkEEEHUEEHabc5jtERLHOh1tpudh6wDzT7SOLF6y4VT4KYWq9viqMDkU9FU5rcy6n4ZDpmx4Pesxqd53hVxUAIzlkU2Y6gPlAZkv4cw5WmFjYXOg6zvqSUVh5Xka5vQZQGWrUVrWYG+gsQbnyFt5YK2YXVcwOoJOVfra59QCJpphjM81a2LAOVRmbyXYH8zbL6b9Jc1In32v8AlUZR89bn62PlJR2Q7LiuBVqqBhxoiAW70jS5ttTBFrfEfyjx52WKK1m1NTnLEaPZns1iMV947d3TPxhRqL6ikp94/nOgO19VnpvD+HU6FMU6aBV58yx2zO27HqZtKAAABYDQAbADYAReedZbKXs9aumMF17NWvhQdpy8Xw1XtnQNl1Ukaqdrow1U9Rad8yhQSmmhFkwtSnpTq1LaALV+9UdczfeH5vMoq1gde7bytnTXr71p3Ww4MwvgbyQcU4mtf+7p/wDnf9u6lC1c/FTQeQRnPyYsAP6TOscBLhgI6BxkwYvd2ao2hvUIIBGxVAAinqFB6zYInT9hEuXBiRoOYiE6Wkd412RcA1cKum70AN/zUvI+abHlY6NPadADlMktGxxeorZXGccZ4mhBF5mTEMvOTLtvwAZWxVJbEeKuo+JedQD8S/F5rc7rY+ftXZDZwSOTDmPTzHP6gcp6NdkZx08e2mUJYdmljxzm6ldZH0cMLqbjbSZVbyl+KKc2jvBwecq04Qrt5zJ7Uf8AZkcRzJZ2b4z7LWCufuKzBWvtTqmyq48lbRW5A5W08ZPpc8GqYjMpUqCCCCG1BB0IInqPYLi5xGECuxapRPdOTe7Aa02JPvEoVBPNg05rq87O7xreXTJTERMDrIxx7s+aqYi5Dq694lHIATUWmFQMxNmW6qQthruSNJp4XsdQap7SlPuWBDUqeQKigZgGqUhYFmDG+xAy7Mt5Mok6yGkyHdokTBYGs6he/rHI1RVVWZ6zEEhrXIRSxUG9lQCeYAeXoJOftWxniw1EbXfEHoVApp9RUqfSQYMLXOw1JPlOvx19Onn+W9kl+Dq9nuDe2V+7NxTQB6pU2OUkhUB3Bcgi42CtqDaeq06aqoVVCqoCqqgAKoFgABoAALWnE7GcONHCIXFnqffuDuucDIh6qgUHqGPOd4ziunylvwd/j1cI58lAYESgmZsXSsS28FioErKCUvAKSqwBKwVFpQypgCCwEpK3iALTyntRwgYbElFA7twalIWFlAID0x/AStvyuo5GerXkc7dYDvcG1QDx0D7QNCSVUEVBpvemWNvML5TSmfGX6OfyK+cWvk8xbDi9x4T5rp9RsfnKZ2X3hmH4kH7pv9LzPKNPTw8bfyWpVVtmB87HUeo5S+86vYVKFXHGliKVOotWmQveorEPTOZchIuDkNU6eQ8pMOIdk8LRY91hi/er3aKc9QJVBOU5mJNNSGJJuABT01sDlK7i8aOmPi8oqSZ5zaSH7P2qLjS1MkranTqoqsxKt32VmI8KqrEG7WJ1sdCrd8fZ8lMBszYgAZSjuabdWRlIUtvo4te1impPc7M8E7hKbDOlqZptSfISCzK12ZSbkEMdSx8bamZWWqSxG1HjyhLWySREwYnEJTUu7qii12dgqi5AFydBqQPnOc7DPEx06gYBlIKkXBU3BHmCN5kgHjH2j4rPxJwD/d06dEjrZqv7VR9BOZwXCitiaVFtVdwGBFwUVWqOD6ojD5ze7d4CoMS2NtejiXGQ81y0lVc3R1pl16aGx0l3YDXFM5+CmbersAD9EYfzToU+Nbw4pVuVy09WJi816NYGZ1nEeiVMpaXRBYSkQTAF5QSkCCpfKGAZS8FisRBgC0CJQmAAIZAQQRcEWI8wdDKiCYB4n3BplqZJJps9Ek7nu3ZL/PLf5zDXqaTodrXyY/EqLWLq4A/NSpM1+uZifmPOcVnvPThPYo8OyvjNr9mzwXG9xiqFbYJVRmPkhOSof6GefQ0+aa6XRh5gr6ltAB1JNp9F8MxIq0KdQMGDorhl2OZQbj6znuXaZ2+M+mjciImJ0icbj+NSmaAdgC9ZaajmxysdPS1/l6TBV4pib1O7pUm7t2psjVmRgBZlOYU2F2psj2sLZrX0vObg6ftdJnrKyVGYZiGUlDSqBkWm2oKqyg6jxa5l1IkN4Slox4bCF62FZUU3qVabKXpkEgu6IGXI9gTZSA5JuCxDDJxqrVNKzVvAzpTqeBVHdswDgncBvcvyzfObA4cmYF2ZypzL3hXKp3BCKApI5EgkcjNwKCCCAQRYgjQg7gjmJVy76LKJx+0lNcVhnobZl0Yj3XGqMPRgD8pAvs+rffVAwys1NGKsLMMpuwIOo/vF+o856G/AsLbKKKBdsguEt5d2Dkt0taYuLcLRmWqlkqqCqVMt/Cd0caZk2NrjzBBlufTRXh9Sl+DIlS202qeJnGw2IzA3GVlOV1vezdDzBFiDzBG202UqTPC511xImUVBOMHmVKhHOCx17yhmgmJMyDFDzgG0JUiYFxAl4riCplAlDMYrCDVEFi+VEwd+Ja2JA5wVNkmWuwE0nxUwNiTAOg9ea1XFBQSToBc+g1M02ealWk+ID0qbZFsab1LA5SRYqgOjPY7nRep0jAW8R4QuL4Yqmwq29oVj8NZ7uwv+Elih/KegkA4f2bxtZA6YZghBIapUpLtoRlL5r3BG3Kek4SjiUQI1OmzAWDpUKoxAsCwZc1O/kM9vMzf4Xge7pGm5BzNUqMFvlvVdncLztdz+82/0cV0YypjJ7IiX2ecBVSMVVAL2Joi4YKp0zgjQlhseSkW94yc9nfDTemNkq1FAHJWbvEUAbAK4A6ATh4TD1cOopsjOiDIlWnZiUUAIKie8HtoSoYHLfw3yizB4N077EBjRqM5q5iMwyJTRAKyKbVAe7LWvmUPoVN5Ep72WjDisRN4kUw2LrYrK9Q9xSyq/d03Od7i57yqLFVvsqWPh8THMUHY4CtsMhuSGBdc17hHYuim+vhVguvlAOZ2gpVUrJUojMav9ndS2UXVKlSnUuTYWyurWBJDL+AA5MHh+7pqhNyASxAsGdiWcgcgWYm3K83uOgCl3h2pMtUkmwVBpUY+lNnPynI7RVGXDuVJBOSndSQQKjqjEEbGzGx87Sk2XiVxXGcPT0apci4Ipo9QgjcN3atlPQzWTtLhDvVya2vWp1KQ+TVFUH6yNogUBVAAAsABYADYAchKkTPkX4k6mrinvpIngeMHDGwu1L4kGuQfipj90GhtoL3zSRagbxA3BsQQbgjcEGBhyeIp3bpX5XWjVsN0ZrIx/gdvQK7mbwEuxVJXRqbi6upRgeasLEfQyEcB7Smj9ximZgjNSFa1yCjFCKgGpF198a+fNppGLl6KSko+ybXlQ0sR1YBlIZSMwZSCCDsQRoRLjIJKhzLleY1lYBl72A8xWiRgMyvDVJhvLSYwGYPKF5ZKXk4C5nlolJWAamOrNdaVM2epmswtdFUDPUsdDbMoGh8TrfS87+ApqqBVFlUWAvf6k6k87ne8jnC2WpXrVQbhCuFFrWuih3sfPM4U9afQzuUKuU9JDB0gJRROXxDjdOlYas5FwiWvbbMSdFXfU6mxsDacl+P4g+6tJOjK9T/2DJ+0gnCWS1lB3kYodoqyn7xEcc+6DU2H8IdmDHoSvrJLh661EV0N1YZgenodQeh2gkj2Jwz0lFHKxpFqdAVFYeCi7qhDEnMGVWyhhf4WJ9605AtoJHeLgdywPxFKY9XdEUDrdgJI5pF6ZyWFCtxY6+sh+NoFUqYNtPCTh3a5DItil+qPlUjW4Ct8VhMpp4/ApWTK4OhzKy6MjC4DKeR1I8iCQQQSDLWkJ4eTe3HmLEEqwO6sDZlPUEEfKYXxTGd7tFwFkcu5VHYhe81WlWOiqGOvdVPdUXvm0ALWGXg4jB1aej03XqELL/Ul1HzMyccNVLTCzkyU9ma96BX8DtTF/IhXAHQZ7D0tIxRw1RzZKbseiMB83ayj5kSYcEwDUaSo5Bcku+XbMxvZSdwBZb2F7XsJIN9kvPK+OW9rrZdu8f638X/teem1MQxqChR8VYgHYstJT8dW3urvZbguRYcyMFX7MMMSSuIxCkkk+KiwJJJJN6d7kknebUy4vWc18HJYjznhXFquHb7tvATdke5Q66kD4DvqPneS/h/avD1CFc9y+wFQjK23uvsd9jYnynWX7L8NzxOJPTNQAP+FedPCdgeH0yCaJqG1vvqjup9UvkP8ATLzcZf0pXGyPTaw1VlZ1anZegAO5zYe2woEZLeXdMCgvzIAPWadTguJQe9Tq7+6GpNbkArFwx6llHpMMOnkjVJgS1s6Ld8PWS2lhSaof8HODMXti7ZagPk1CsD9CkjCdM9otMHtQ5JVP8OGrt9LJMlNnYXShXboaLof8UIIwaZDKKJevDsY4BWiiX39orDMumngpq6nX84ka43wDjJG6Mp3XBVBT06mplf5Bjfylox0rKaS06PFOOUMPpUqXf8FPxVD5eEe6OrWHWRDi/aarWutO9JDocp8bDndx7nouv5poVeDYmmSrYSuttSRh6hW51JzhSp+sw08JVb3aNVuiUajH6BZ0Qriu29OKy6b6SwmP2f1VGHqUwAMlQkAW910Qg25eIOPlJBj8WKdN6h+EXAva7HRV+bED5yJdlsBisPVNSph6iUaiimzuuXKwN6ZKsQwFyy3y2BcXIkj7Q4dnwzhQSRkqWAuSEdXIA5mymw87TnsSUnh11NuC0iFJnuWdszuc7ta2ZrAbcgAAAOQAE3KWMImmhBFwbg6gjmOkqZmzZHSXGjnJN2SxeanUX4VqXHTOqsw/qu380gzObhVUu7aKiC7Meg/cnQbkgSWcLw5wlFVYZ61Ri2SkLmpUYABFva4VVUFmsAFzNlF7EiGyRuhrYilTFsqN7TV2NwoYUlPkTUs4P/RMkk5fBMA1Gn4yGqOc9QqSVDWACpcDwqAFGgvYk6kzpzVLEZt6ysREkgsdQQQRcHQg6gg76TjVeztO96T1KP5abApYaACm4ZUHRAs7kQCM1eAYgnw4qmBzzYVmb5EVQB9JX/hhmP3mKqldilFUpBvVwDUH8rLJJEjETrNLhvDqWHTu6NNUW+Yhd2Y7szHVmPNiSTN6IkkCIiAIiIAiIgCIiAIiIBSJWIBgr0VqKyOoZHBRlYAhlYWIIO4INrSK1+H1cMCLNVoj3GQM9VF18NRAC1QDQB1zMQRmFwXaYykhrSU8PMcdg8FUYnvRRcm7ZXRGJvclqdQWBPM5QT5znnhuFZ8oxpc793hzTeoR1VFZz/KBPXbXhVA2FvSV4k8iBcK4I4FsNh8gYDNVxeZWIud1a9VyN8rZBroRJRwfgy0LuWNSqws1RwAbXvlRRoiA/CN7XJY6zrSsslhDeiIiSQIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgH//2Q=="
                        className="w-[106px] h-[82px] rounded-[10px]"
                    />
                    <div className="flex flex-col gap-2 w-full">
                        <p className="text-lg font-bold text-left text-black">{propData.title}</p>
                        <p className="text-sm text-left text-black">{ propData.content}</p>
                    </div>
                </div> */}
        <div className="rounded-[15px] border px-5 py-2 cursor-pointer gap-2 transition ease-in-out duration-300 hover:-translate-y-1.5 hover:shadow-md ">
          <div className="font-bold text-[18px] my-3">{propData.title}</div>
          <div className="text-[12px] my-3 text-gray-800">
            {propData.content > 100 ? slicedContent : propData.content}
            {/* <div dangerouslySetInnerHTML={{ __html: props.content }}></div> */}
          </div>
          <div className="flex flex-col justify-start items-start pb-2 border-b">
            <p className="text-[12px]">
              참가인원: {propData.userGathered} / {propData.userLimit} 명
            </p>
            <p className="text-[12px]">{propData.startTime} 시작</p>
            <p className=" text-[12px]">
              {firstcourse[0]} 외 {propData.curricula.length - 1}개 강의
            </p>
          </div>
          <NavLink
            to={`/mypage/${propData.leadUser.userId}`}
            className="hover:text-[#989aff] flex gap-3 justify-end items-center pt-2"
          >
            <p className="text-[12px] font-bold py-3 text-right">
              {propData.leadUser.nickname}
            </p>
            <img
              className="rounded-full border w-[30px] h-[30px]"
              src={propData.leadUser.saveName ? image : "/logo.png"}
            />
          </NavLink>
        </div>
      </Link>
    </>
  );
}
