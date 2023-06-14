const TOML = require("@iarna/toml");

export function ENTOMLDate(state){
    state.Bsetting = TOML.parse(state.allData[0].content)
    state.GptConfig = TOML.parse(state.allData[4].content)
    state.NLP = TOML.parse(state.allData[6].content)
    state.AzureConfig = TOML.parse(state.allData[8].content)
    state.speech = TOML.parse(state.allData[9].content)
    state.ProxySetting = TOML.parse(state.allData[12].content)
    console.log(state)

}

export function DETOMLData(state) {
    state.allData[0].content = TOML.stringify(state.Bsetting)
    state.allData[4].content = TOML.stringify(state.GptConfig)
    state.allData[6].content = TOML.stringify(state.NLP)
    state.allData[8].content = TOML.stringify(state.AzureConfig)
    state.allData[9].content = TOML.stringify(state.speech)
    state.allData[12].content = TOML.stringify(state.ProxySetting)
}