import { StyleSheet, View, Dimensions } from 'react-native';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import {GLView} from "expo-gl";
import {AmbientLight, PerspectiveCamera, Scene, SpotLight} from "three";
import {Renderer, THREE} from "expo-three";
import {Asset} from "expo-asset";
import {Canvas} from "@react-three/fiber/native";
import {Suspense} from "react";
import Model from "../components/Model";

export default function MapPage() {


   let timeout;

    const onContextCreate = async (gl) => {
        console.log('Context created');

        const scene = new Scene();
        scene.background = new THREE.Color(0x808080);

        const { width, height } = Dimensions.get('window');
        console.log('Dimensions:', width, height);

        const camera = new PerspectiveCamera(
            75, width / height, 0.1, 1000
        );
        camera.position.z = 5;

        const renderer = new Renderer({ gl });
        renderer.setSize(width, height);

        // Illuminazione
        const ambientLight = new AmbientLight(0x404040);
        scene.add(ambientLight);

        const spotLight = new SpotLight(0xffffff);
        spotLight.position.set(100, 1000, 100);
        scene.add(spotLight);

        // Caricamento del modello OBJ
        try {
            const loader = new OBJLoader();

            // Carica il file con expo-asset e funziona
            const modelAsset = Asset.fromModule(require('../../../assets/models/Mappa_evento/Mappa_evento.obj'));
            await modelAsset.downloadAsync();

            console.log('URI del modello:', modelAsset.uri);

            loader.load(
                modelAsset.uri,
                (object) => {
                    object.scale.set(1, 1, 1); // scala il modello
                    object.position.set(0, 0, 0); // Posizione centrale
                    scene.add(object);
                    console.log('Oggetto aggiunto alla scena:', object);
                },
                (xhr) => {
                    if (xhr.total) {
                        console.log(`${(xhr.loaded / xhr.total * 100)}% caricato`);
                    }
                },
                (error) => {
                    console.error('Errore nel caricamento del modello:', error);
                }
            );
            console.log('Modello caricato con successo');
        } catch (error) {
            console.error('Errore nel caricamento dell\'asset:', error);
        }

        const render = () => {
            timeout = requestAnimationFrame(render);
            renderer.render(scene, camera);
            gl.endFrameEXP();
        };
        render();
    };

    return (
        <GLView
            style={styles.glView}
            onContextCreate={onContextCreate}
        />
    );
    {/* <View>
        <Canvas>
            <Suspense fallback={null}>
                <Model/>
            </Suspense>
        </Canvas>
    </View>
     */}

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    glView: {
        flex: 1,
    },
});