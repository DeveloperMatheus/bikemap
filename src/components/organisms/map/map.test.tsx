import Map from './index'
import { render } from '@testing-library/react'
import { MapData } from '../../../models/mapData';

describe('<Map />', () => {
    it('should render the Map with props', () => {
        const placeNetworkMarkerIdMock = jest.fn();
        const mapDataMock: MapData[] = [
            {
                id: 'nextbike-flensburg',
                name: 'Test',
                latitude: 54.7804,
                longitude: 9.43571,
                free_bikes: 3,
                empty_slots: 16,
                type: 'station'
            }

        ]

        const { container } = render(<Map data={mapDataMock} placeNetworkMarkerId={placeNetworkMarkerIdMock} />)
        expect(container).toMatchSnapshot()
    })
})