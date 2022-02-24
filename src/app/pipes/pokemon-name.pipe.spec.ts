import { PokemonNamePipe } from './pokemon-name.pipe';

describe('PokemonNamePipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonNamePipe();
    expect(pipe).toBeTruthy();
  });
});
