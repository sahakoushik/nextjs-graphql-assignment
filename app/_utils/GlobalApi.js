const { gql, request } = require("graphql-request")

const PROJECT_URL="https://api.react-finland.fi/graphql"

const getConfList = async()=>{
    const query= gql`{
        conferences {
        id
        name
        startDate
        slogan
        goldSponsors{
          name
          image{
            url
          }
        }
        silverSponsors{
          name
          image{
            url
          }
        }
        bronzeSponsors{
          name
          image{
            url
          }
        }
        platformSponsors{
          name
          image{
            url
          }
        }
      }
    }`

    const result = await request(PROJECT_URL, query)
    return result

}

const getConferenceById = async (id)=>{
    console.log("id" , id);
    const query= gql`{
        conference(id: "${id}") {
          id
          name
          slogan
          organizers {
            name
            about
            image{
              url
            }
          }
          allSpeakers {
            name
            about
            social {
              twitter
              linkedin
              dribble
              github
            }
            image{
              url
            }
          }
          schedules {
            day
            intervals{
              sessions {
                begin
                end
                title
              }
            }
          }
          sponsors {
            name
            about
            image{
              url
            }
          }
        }
      }`
    
    const result = await request(PROJECT_URL, query)
    return result
}

export default {
    getConfList,
    getConferenceById
}