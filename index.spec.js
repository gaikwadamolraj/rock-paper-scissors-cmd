const { 
    dashLine,
    newLine,
    COMP_VS_COMP,
    COMP_VS_PLAY,
    GAME_TYPE,
    USER_INPUT_TYPE,
    gameTypes,
    objWeapen,
    validateInput,
    compare,
    getWeaponsStr,
    getInitChoice } = require('./common');
const  chai = require('chai');
const expect = chai.expect;

describe('Game validation', () => {
    it('dashLine should get dashed line',  () => {
        expect(dashLine).to.eql('---------------');
    });

    it('newLine should get new line line',  () => {
        expect(newLine).to.eql('\n');
    });

    it('COMP_VS_COMP should get constant value',  () => {
        expect(COMP_VS_COMP).to.eql('1');
    });

    it('COMP_VS_PLAY should get constant value',  () => {
        expect(COMP_VS_PLAY).to.eql('2');
    });

    it('GAME_TYPE should get constant value',  () => {
        expect(GAME_TYPE).to.eql('GT');
    });

    it('USER_INPUT_TYPE should get constant value',  () => {
        expect(USER_INPUT_TYPE).to.eql('UIT');
    });

    it('gameTypes should get object value',  () => {
        expect(gameTypes).to.be.an('object');
    });

    it('objWeapen should get object value',  () => {
        expect(objWeapen).to.be.an('object');
        expect(objWeapen[1]).to.eql('rock');
    });

    it('validateInput get false when we pass wrong game type',  () => {
        expect(validateInput(GAME_TYPE, '4')).to.eql(false);
    });

    it('validateInput get  true when we pass correct game type',  () => {
        expect(validateInput(GAME_TYPE, '1')).to.eql(true);
    });

    it('validateInput get true when we pass correct userinput type',  () => {
        expect(validateInput(USER_INPUT_TYPE, '1')).to.eql(true);
    });

    it('validateInput get  false when we pass wrong userinput type',  () => {
        expect(validateInput(USER_INPUT_TYPE, '6')).to.eql(false);
    });


    it('compare get the comop1 winner',  () => {
        expect(compare('paper', 'rock')).to.eql('Player 1 covers Player 2\'s rock (somehow) rendering him useless: WIN');
    });

    
    it('getWeaponsStr get weapon string',  () => {
        expect(getWeaponsStr()).to.eql('Select \n 1 for rock \n 2 for scissors \n 3 for paper \n');
    });
    
    it('getInitChoice get weapon string',  () => {
        expect(getInitChoice()).to.eql('Select type of Game? \n ---------------\n 1 - Comp vs Comp\n 2 - Comp vs Player\n 3 - Exit Game \n --------------- \n');
    });
});